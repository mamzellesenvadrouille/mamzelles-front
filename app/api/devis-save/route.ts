import { NextRequest, NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  try {
    const devis = await req.json();
    const id = `devis:${Date.now()}`;
    await redis.set(id, {
      ...devis,
      date: new Date().toISOString(),
    });
    await redis.lpush('devis:index', id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de sauvegarde' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { id, field, value } = await req.json();
    const data = await redis.get(id as string);
    if (!data) return NextResponse.json({ error: 'Devis introuvable' }, { status: 404 });
    const devis = typeof data === 'string' ? JSON.parse(data) : data;
    devis[field] = value;
    await redis.set(id, devis);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de mise à jour' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    if (all) {
      const ids = await redis.lrange('devis:index', 0, -1);
      if (ids.length > 0) {
        await Promise.all(ids.map(i => redis.del(i as string)));
      }
      await redis.del('devis:index');
    } else if (id) {
      await redis.del(id);
      await redis.lrem('devis:index', 0, id);
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json({ error: 'Erreur de suppression' }, { status: 500 });
  }
}
