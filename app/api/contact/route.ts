import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';

const resend = new Resend(process.env.RESEND_API_KEY);
const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prenom, email, telephone, duree, destination, adultes, enfants, budget, message } = body;

    const id = `demande:${Date.now()}`;
    await redis.set(id, {
      id,
      prenom, email, telephone, duree, destination, adultes, enfants, budget, message,
      date: new Date().toISOString(),
      traitee: false,
    });
    await redis.lpush('demandes:index', id);

    await resend.emails.send({
      from: 'MamZelles en Vadrouille <noreply@mamzellesenvadrouille.com>',
      to: process.env.CONTACT_EMAIL || 'contact@mamzellesenvadrouille.com',
      replyTo: email,
      subject: `✈️ Nouvelle demande de devis — ${prenom}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1a1208;">
          <div style="background: #2a1f14; padding: 24px 32px;">
            <h1 style="color: #c8a96e; font-size: 20px; margin: 0;">MamZelles en Vadrouille</h1>
            <p style="color: #a89070; margin: 4px 0 0; font-size: 13px;">Nouvelle demande de devis</p>
          </div>
          <div style="padding: 32px; background: #faf6f0; border: 1px solid #e8e0d4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048; width: 40%;">Nom Prénom</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px; font-weight: bold;">${prenom}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;"><a href="mailto:${email}" style="color: #c8a96e;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Téléphone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;">${telephone ? `<a href="tel:${telephone}" style="color: #c8a96e;">${telephone}</a>` : '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Formule / Durée</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;">${duree || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Destination(s)</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;">${destination || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Adultes</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;">${adultes || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Enfants</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 14px;">${enfants || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e8e0d4; font-size: 13px; color: #5a5048;">Budget</td>
                <td style="padding: 10px 0; font-size: 14px;">${budget || '—'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="font-size: 13px; color: #5a5048; margin: 0 0 8px;">Message</p>
              <p style="font-size: 14px; line-height: 1.7; background: #fff; padding: 16px; border: 1px solid #e8e0d4; margin: 0;">${(message || '—').replace(/\n/g, '<br/>')}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #2a1f14; text-align: center;">
            <p style="color: #a89070; font-size: 12px; margin: 0;">MamZelles en Vadrouille © 2026</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Erreur envoi' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const ids = await redis.lrange('demandes:index', 0, -1);
    const demandes = await Promise.all(
      ids.map(async (id) => {
        const data = await redis.get(id as string);
        return typeof data === 'string' ? JSON.parse(data) : data;
      })
    );
    return NextResponse.json(demandes.filter(Boolean));
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de lecture' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;
    const data = await redis.get(id as string);
    if (!data) return NextResponse.json({ error: 'Demande introuvable' }, { status: 404 });
    const demande = typeof data === 'string' ? JSON.parse(data) : data;

    if ('field' in body) {
      // Mise à jour générique (ex: devisEnvoyeLe, devisLienUrl)
      demande[body.field] = body.value;
    } else if ('traitee' in body) {
      // Compatibilité avec l'ancien format
      demande.traitee = body.traitee;
    }

    await redis.set(id, demande);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de mise à jour' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await redis.del(id);
    await redis.lrem('demandes:index', 0, id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de suppression' }, { status: 500 });
  }
}
