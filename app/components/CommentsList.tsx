'use client';
import { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  date: string;
  text: string;
  reply?: {
    author: string;
    date: string;
    text: string;
  };
}

interface CommentsListProps {
  comments: Comment[];
  initialCount?: number;
}

export default function CommentsList({ comments, initialCount = 3 }: CommentsListProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? comments : comments.slice(0, initialCount);
  const remaining = comments.length - initialCount;

  return (
    <div className="article-comments-list">
      {visible.map((c) => (
        <div key={c.id} className="article-comment-thread">
          <div className="article-comment">
            <div className="article-comment-avatar">{c.author[0]}</div>
            <div className="article-comment-body">
              <div className="article-comment-meta">
                <span className="article-comment-author">{c.author}</span>
                <span className="article-comment-date">{c.date}</span>
              </div>
              <p className="article-comment-text">{c.text}</p>
            </div>
          </div>
          {c.reply && (
            <div className="article-comment article-comment-reply">
              <div className="article-comment-avatar article-comment-avatar-us">M</div>
              <div className="article-comment-body">
                <div className="article-comment-meta">
                  <span className="article-comment-author article-comment-author-us">{c.reply.author}</span>
                  <span className="article-comment-date">{c.reply.date}</span>
                </div>
                <p className="article-comment-text">{c.reply.text}</p>
              </div>
            </div>
          )}
        </div>
      ))}

      {!showAll && remaining > 0 && (
        <button
          className="comments-show-more"
          onClick={() => setShowAll(true)}
        >
          Voir les commentaires suivants →
        </button>
      )}
    </div>
  );
}
