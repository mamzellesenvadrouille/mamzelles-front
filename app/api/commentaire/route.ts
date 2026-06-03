import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, articleTitle, articleUrl } = await request.json();

    // Vérifications basiques
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
    }

    // Vérification email valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
    }

    // Anti-spam basique : message trop court ou trop long
    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json({ error: 'Message invalide' }, { status: 400 });
    }

    // Anti-spam : détecter les liens dans le message
    if ((message.match(/https?:\/\//g) || []).length > 2) {
      return NextResponse.json({ error: 'Spam détecté' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'MamZelles en vadrouille <contact@mamzellesenvadrouille.com>',
      to: 'contact@mamzellesenvadrouille.com',
      replyTo: email,
      subject: `💬 Nouveau commentaire — ${articleTitle}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f4ef;">
          <h2 style="font-family: Georgia, serif; color: #1a1512; margin-bottom: 8px;">Nouveau commentaire</h2>
          <p style="color: #888; font-size: 13px; margin-bottom: 24px;">Article : <a href="${articleUrl}" style="color: #c8956c;">${articleTitle}</a></p>
          <div style="background: #fff; border-radius: 8px; padding: 24px; border-left: 3px solid #c8956c;">
            <p style="font-weight: 600; color: #1a1512; margin: 0 0 4px;">${name}</p>
            <p style="color: #888; font-size: 13px; margin: 0 0 16px;">${email}</p>
            <p style="color: #444; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="color: #aaa; font-size: 12px; margin-top: 24px;">Répondez à cet email pour contacter directement l'auteur·ice du commentaire.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
