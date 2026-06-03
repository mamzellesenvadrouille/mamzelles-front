'use client';
import { DiscussionEmbed } from 'disqus-react';

export default function DisqusComments() {
  return (
    <div className="article-disqus">
      <DiscussionEmbed
        shortname="mamzellesenvadrouille"
        config={{
          url: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours',
          identifier: 'visiter-madrid-en-3-jours',
          title: '3 jours à Madrid : les incontournables de la capitale espagnole',
          language: 'fr_FR',
        }}
      />
    </div>
  );
}
