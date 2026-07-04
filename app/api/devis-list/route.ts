import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function GET() {
  try {
    const ids = await redis.lrange('devis:index', 0, 99);
    if (!ids || ids.length === 0) return NextResponse.json([]);

    const devis = await Promise.all(
      ids.map(async (id) => {
        const data = await redis.get(id as string);
        if (!data) return null;
        // Upstash retourne déjà l'objet parsé
        const parsed = typeof data === 'string' ? JSON.parse(data) : data;
        return { id, ...parsed };
      })
    );

    return NextResponse.json(devis.filter(Boolean));
  } catch (error) {
    console.error('Redis error:', error);
    return NextResponse.json([], { status: 500 });
  }
}
