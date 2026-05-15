import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, Tag, ArrowRight, BookOpen } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllPosts, BlogPost } from '@/lib/blogStore';

const SITE = 'https://hireagent.co';

export default function Blog() {
  const allPosts = useMemo(() => getAllPosts(), []);
  const [activeTag, setActiveTag] = useState('All');

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ['All', ...Array.from(tags)];
  }, [allPosts]);

  const filtered = activeTag === 'All'
    ? allPosts
    : allPosts.filter((p) => p.tags.includes(activeTag));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'HireAgent Blog',
    description: 'AI voice bot and automation insights for businesses.',
    url: `${SITE}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'HireAgent',
      url: SITE,
    },
    blogPost: allPosts.slice(0, 10).map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.excerpt,
      url: `${SITE}/blog/${p.slug}`,
      datePublished: p.publishedAt,
      author: { '@type': 'Person', name: p.author },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Blog | AI Voice Bot & Automation Insights | HireAgent</title>
        <meta
          name="description"
          content="Explore HireAgent's blog for expert insights on AI voice bots, sales automation, customer support AI, and no-code workflows. Stay ahead with the latest AI trends."
        />
        <meta name="keywords" content="AI voice bot blog, AI automation insights, customer support AI, sales voicebot tips, AI chatbot guides" />
        <link rel="canonical" href={`${SITE}/blog`} />
        <meta property="og:title" content="Blog | AI Voice Bot & Automation Insights | HireAgent" />
        <meta property="og:description" content="Expert insights on AI voice bots, sales automation, and customer support AI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | AI Voice Bot & Automation Insights | HireAgent" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-neon-purple/20 bg-neon-purple/10 px-4 py-1.5 mb-6">
                <BookOpen className="h-4 w-4 text-neon-purple" />
                <span className="text-sm font-medium">HireAgent Blog</span>
              </div>
              <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-4">
                AI Insights &{' '}
                <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
                  Best Practices
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert guides on AI voice bots, sales automation, customer support, and no-code workflows.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tag Filters */}
        <section className="pb-8 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap justify-center gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTag === tag
                      ? 'bg-gradient-to-r from-neon-purple to-neon-blue text-white'
                      : 'bg-card/50 border border-border/40 text-muted-foreground hover:text-foreground hover:border-neon-purple/40'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            {filtered.length === 0 ? (
              <p className="text-center text-muted-foreground py-20">No posts found.</p>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex flex-col rounded-2xl border border-border/40 bg-card/50 hover:border-neon-purple/40 hover:bg-card transition-all overflow-hidden"
    >
      {/* Cover placeholder */}
      {post.coverImage ? (
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
          <BookOpen className="h-12 w-12 text-neon-purple/40" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple"
            >
              <Tag className="h-2.5 w-2.5" />
              {tag}
            </span>
          ))}
        </div>

        <h2 className="font-display text-lg font-bold mb-2 group-hover:text-neon-purple transition-colors line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime} min read
            </span>
            <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
          </div>
          <a
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-neon-purple hover:gap-2 transition-all"
            aria-label={`Read ${post.title}`}
          >
            Read <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
