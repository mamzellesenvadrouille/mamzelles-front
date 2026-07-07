import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  try {
    const proposition = await req.json();
    const id = `proposition:${Date.now()}`;
    await redis.set(id, {
      ...proposition,
      date: new Date().toISOString(),
    });
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mamzellesenvadrouille.com';
    const url = `${siteUrl}/proposition/${id.replace('proposition:', '')}`;
    return NextResponse.json({ ok: true, url });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de sauvegarde' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID manquant' }, { status: 400 });
    const data = await redis.get(`proposition:${id}`);
    if (!data) return NextResponse.json({ error: 'Proposition introuvable' }, { status: 404 });
    const proposition = typeof data === 'string' ? JSON.parse(data) : data;
    return NextResponse.json(proposition);
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de lecture' }, { status: 500 });
  }
}
