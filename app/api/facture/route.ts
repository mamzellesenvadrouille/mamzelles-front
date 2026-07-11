import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { clientName, clientEmail, formule, montant, description, type } = await req.json();
    // type: 'acompte' | 'solde'

    if (!clientName || !montant || montant <= 0) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    // 1. Créer (ou réutiliser) un client Stripe pour pouvoir émettre une facture
    const customer = await stripe.customers.create({
      name: clientName,
      email: clientEmail || undefined,
    });

    // 2. Créer la ligne de facture
    await stripe.invoiceItems.create({
      customer: customer.id,
      currency: 'eur',
      amount: Math.round(montant * 100),
      description: [
        formule === 'Sur-mesure' ? 'Votre voyage sur mesure' : `Formule ${formule}`,
        description?.replace(/\n/g, ' — '),
      ].filter(Boolean).join(' — '),
    });

    // 3. Créer la facture (paiement déjà encaissé via Checkout, on ne demande pas à Stripe de l'envoyer)
    const invoice = await stripe.invoices.create({
      customer: customer.id,
      collection_method: 'charge_automatically',
      auto_advance: false,
      footer: 'MamZelles en vadrouille — Merci pour votre confiance.',
      metadata: {
        clientName,
        formule,
        type: type || '',
      },
    });

    // 4. Finaliser la facture : verrouille le contenu, attribue le numéro légal, génère le PDF
    const finalized = await stripe.invoices.finalizeInvoice(invoice.id!);

    // 5. Marquer la facture comme payée hors système (le paiement a déjà été encaissé via Checkout)
    // Si un retry réseau a déjà fait passer la facture en "payée" juste avant, on récupère simplement son état actuel plutôt que d'échouer.
    let paid: Stripe.Invoice;
    try {
      paid = await stripe.invoices.pay(finalized.id!, { paid_out_of_band: true });
    } catch (payError: any) {
      if (payError?.raw?.message === 'Invoice is already paid' || payError?.message?.includes('already paid')) {
        paid = await stripe.invoices.retrieve(finalized.id!);
      } else {
        throw payError;
      }
    }

    return NextResponse.json({
      invoiceId: paid.id,
      pdfUrl: paid.invoice_pdf,
      hostedUrl: paid.hosted_invoice_url,
      number: paid.number,
    });
  } catch (error) {
    console.error('Stripe invoice error:', error);
    return NextResponse.json({ error: 'Erreur lors de la création de la facture' }, { status: 500 });
  }
}
