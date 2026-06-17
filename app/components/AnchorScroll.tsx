'use client';
import { useEffect } from 'react';

export default function AnchorScroll() {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    window.scrollTo(0, 0);

    const scrollToHash = () => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const images = Array.from(document.images);
    const unloaded = images.filter(img => !img.complete);

    if (unloaded.length === 0) {
      setTimeout(scrollToHash, 100);
      return;
    }

    let loaded = 0;
    const onLoad = () => {
      loaded++;
      if (loaded >= unloaded.length) scrollToHash();
    };
    unloaded.forEach(img => {
      img.addEventListener('load', onLoad, { once: true });
      img.addEventListener('error', onLoad, { once: true });
    });

    // Fallback : scroll quoi qu'il arrive après 3s
    setTimeout(scrollToHash, 3000);
  }, []);

  return null;
}
