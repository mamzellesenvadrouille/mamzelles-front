import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, articleTitle, articleUrl } = await request.json();

    if (!name || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'MamZelles en vadrouille <contact@mamzellesenvadrouille.com>',
      to: 'contact@mamzellesenvadrouille.com',
      replyTo: email || undefined,
      subject: `💬 Nouveau commentaire — ${articleTitle}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f4ef;">
          <h2 style="font-family: 'Cormorant Garamond', serif; color: #1a1512; margin-bottom: 8px;">Nouveau commentaire</h2>
          <p style="color: #888; font-size: 13px; margin-bottom: 24px;">Article : <a href="${articleUrl}" style="color: #c8956c;">${articleTitle}</a></p>
          <div style="background: #fff; border-radius: 8px; padding: 24px; border-left: 3px solid #c8956c;">
            <p style="font-weight: 600; color: #1a1512; margin: 0 0 4px;">${name}</p>
            ${email ? `<p style="color: #888; font-size: 13px; margin: 0 0 16px;">${email}</p>` : ''}
            <p style="color: #444; line-height: 1.7; margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
