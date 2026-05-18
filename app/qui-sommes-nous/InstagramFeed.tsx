'use client';

import { useEffect, useState } from 'react';

interface Post {
  id: string;
  thumbnailUrl: string;
  permalink: string;
  isReel: boolean;
  mediaType: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://feeds.behold.so/EJW6IH9Z31WBJ6qEwvQc')
      .then(r => r.json())
      .then(data => setPosts((data.posts || []).slice(0, 6)));
  }, []);

  if (posts.length === 0) return null;

  return (
    <section className="qsn-insta">
      <div className="qsn-insta-header">
        <p className="eyebrow-dark">Suivez nos aventures</p>
        <h2 className="qsn-insta-h2">On vous emmène <em>avec nous</em></h2>
        <a href="https://instagram.com/mamzellesenvadrouille" target="_blank" rel="noopener noreferrer" className="qsn-insta-handle">@mamzellesenvadrouille</a>
      </div>
      <div className="qsn-insta-bottom">
        <div className="qsn-insta-grid">
          {posts.map(post => (
            <a key={post.id} href="https://www.instagram.com/mamzellesenvadrouille" target="_blank" rel="noopener noreferrer" className="qsn-insta-item">
              <img src={post.thumbnailUrl} alt="" className="qsn-insta-img" />
              {post.isReel && (
                <div className="qsn-insta-reel-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                </div>
              )}
              <div className="qsn-insta-overlay">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
            </a>
          ))}
        </div>
        <div className="qsn-insta-side">
          <p className="qsn-insta-side-text">Des moments improvisés, des fous rires, notre vie avec Aladdin, des apéros au soleil et beaucoup de vadrouilles.</p>
          <p className="qsn-insta-side-text">Ici, on partage simplement tout ce qui fait notre univers, au fil des jours et des voyages.</p>
        </div>
      </div>
    </section>
  );
}
