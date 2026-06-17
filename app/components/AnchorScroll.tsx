'use client';
import { useEffect } from 'react';

export default function AnchorScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    window.scrollTo(0, 0);
    setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  }, []);
  return null;
}
