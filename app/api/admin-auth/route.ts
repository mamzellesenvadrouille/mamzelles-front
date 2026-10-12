import { NextRequest, NextResponse } from 'next/server';
import { COOKIE_ADMIN, DUREE_BADGE_ADMIN, badgeAdminAttendu } from '@/lib/badge-admin';

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  
  if (process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ ok: true });
    // Remet le "badge" admin, vérifié ensuite par proxy.ts sur toutes les fonctions de l'admin
    res.cookies.set(COOKIE_ADMIN, (await badgeAdminAttendu())!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: DUREE_BADGE_ADMIN,
    });
    return res;
  }
  
  return NextResponse.json({ ok: false }, { status: 401 });
}
