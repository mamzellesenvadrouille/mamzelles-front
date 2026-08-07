import { articles, Article } from '../data/articles';

function pickRelated(currentSlug: string, count: number = 3): Article[] {
  const current = articles.find(a => a.slug === currentSlug);
  const others = articles.filter(a => a.slug !== currentSlug);

  const result: Article[] = [];

  // 1. Articles épinglés (relation forte, toujours affichés en premier)
  if (current?.pinnedWith) {
    for (const slug of current.pinnedWith) {
      const found = others.find(a => a.slug === slug);
      if (found && !result.includes(found)) result.push(found);
    }
  }

  // 2. Retirer les articles exclus (des deux côtés)
  const excluded = new Set<string>(current?.excludedWith || []);
  others.forEach(a => {
    if (a.excludedWith?.includes(currentSlug)) excluded.add(a.slug);
  });

  const eligible = others.filter(
    a => !result.includes(a) && !excluded.has(a.slug)
  );

  // 3. Rotation déterministe (pas aléatoire) basée sur la position de l'article courant
  const startIndex = current ? articles.indexOf(current) : 0;
  const rotated = [
    ...eligible.slice(startIndex % eligible.length),
    ...eligible.slice(0, startIndex % eligible.length),
  ];

  for (const a of rotated) {
    if (result.length >= count) break;
    result.push(a);
  }

  return result.slice(0, count);
}

async function getWpImages(slugs: string[]): Promise<Record<string, string>> {
  try {
    const res = await fetch(
      `https://blog.mamzellesenvadrouille.com/wp-json/wp/v2/posts?slug=${slugs.join(',')}&_embed&per_page=10`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return {};
    const posts = await res.json();
    const map: Record<string, string> = {};
    for (const post of posts) {
      const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      if (img && post.slug) map[post.slug] = img;
    }
    return map;
  } catch {
    return {};
  }
}

export default async function ArticlesLies({ currentSlug }: { currentSlug: string }) {
  const related = pickRelated(currentSlug, 3);
  const wpImages = await getWpImages(related.map(a => a.slug));

  return (
    <div className="article-related">
      <h3 className="article-related-title">À lire aussi</h3>
      <div className="article-related-grid">
        {related.map(article => (
          <a href={`/${article.slug}`} className="article-related-card" key={article.slug}>
            <div className="article-related-img-wrap">
              <img src={wpImages[article.slug] || article.image} alt={article.category} className="article-related-img" />
            </div>
            <div className="article-related-body">
              <span className="article-related-cat">{article.category}</span>
              <p className="article-related-title-card">{article.title}</p>
            </div>
          </a>
        ))}
      </div>
      <a href="/blog" className="article-related-link">Voir tous nos articles →</a>
    </div>
  );
}
