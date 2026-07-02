import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { clientName, formule, montant, description } = await req.json();

    if (!clientName || !montant || montant <= 0) {
      return NextResponse.json({ error: 'Données invalides' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: formule === 'Sur-mesure' ? 'Votre voyage sur mesure' : `Formule ${formule}`,
              description: description.replace(/\n/g, ' · '),
            },
            unit_amount: Math.round(montant * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mamzellesenvadrouille.com'}/paiement/confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mamzellesenvadrouille.com'}/paiement/annulation`,
      custom_text: {
        submit: { message: 'Votre itinéraire personnalisé sera préparé avec soin dès réception de votre paiement.' },
      },
      customer_email: undefined,
      metadata: {
        clientName,
        formule,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 });
  }
}
