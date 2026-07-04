import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  try {
    const devis = await req.json();
    const id = `devis:${Date.now()}`;
    await redis.set(id, JSON.stringify({
      ...devis,
      date: new Date().toISOString(),
    }));
    // Ajoute l'id à la liste
    await redis.lpush('devis:index', id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de sauvegarde' }, { status: 500 });
  }
}
