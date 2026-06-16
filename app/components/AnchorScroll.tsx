'use client';
import { useEffect } from 'react';

export default function AnchorScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    window.scrollTo(0, 0);
    const tryScroll = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (document.readyState === 'complete') {
      setTimeout(tryScroll, 100);
    } else {
      window.addEventListener('load', () => setTimeout(tryScroll, 100), { once: true });
    }
  }, []);
  return null;
}
