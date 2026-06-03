'use client';
import { DiscussionEmbed } from 'disqus-react';

interface DisqusCommentsProps {
  url: string;
  identifier: string;
  title: string;
}

export default function DisqusComments({ url, identifier, title }: DisqusCommentsProps) {
  return (
    <div className="article-disqus">
      <DiscussionEmbed
        shortname="mamzellesenvadrouille"
        config={{
          url,
          identifier,
          title,
          language: 'fr_FR',
        }}
      />
    </div>
  );
}
