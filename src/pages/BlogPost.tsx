import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, ArrowRight, BookOpen, User, Calendar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getAllPosts, getPostBySlug } from '@/lib/blogStore';

const SITE = 'https://hireagent.co';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => (slug ? getPostBySlug(slug) : undefined), [slug]);
  const allPosts = useMemo(() => getAllPosts(), []);

  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;
  const nextPost = currentIdx > 0 ? allPosts[currentIdx - 1] : null;

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">This article does not exist or has been removed.</p>
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-neon-purple font-semibold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    url: `${SITE}/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HireAgent',
      url: SITE,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE}/blog/${post.slug}`,
    },
    ...(post.coverImage && { image: post.coverImage }),
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <link rel="canonical" href={`${SITE}/blog/${post.slug}`} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE}/blog/${post.slug}`} />
        {post.coverImage && <meta property="og:image" content={post.coverImage} />}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:author" content={post.author} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />

        <article className="pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-3xl">

            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/blog" className="hover:text-foreground transition-colors">Blog</a>
              <span>/</span>
              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple"
                  >
                    <Tag className="h-2.5 w-2.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-border/40 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime} min read
                </span>
              </div>

              {/* Cover Image */}
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full rounded-2xl mb-10 object-cover max-h-96"
                />
              ) : (
                <div className="w-full rounded-2xl mb-10 h-56 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-neon-purple/40" />
                </div>
              )}

              {/* Content */}
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground
                  prose-strong:text-foreground
                  prose-a:text-neon-purple prose-a:no-underline hover:prose-a:underline
                  prose-ul:space-y-2 prose-ol:space-y-2"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            {/* Prev / Next */}
            <div className="mt-16 pt-8 border-t border-border/40 grid sm:grid-cols-2 gap-4">
              {prevPost ? (
                <a
                  href={`/blog/${prevPost.slug}`}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 hover:border-neon-purple/40 transition-all"
                >
                  <ArrowLeft className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-neon-purple transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Previous</p>
                    <p className="font-display font-semibold text-sm line-clamp-2 group-hover:text-neon-purple transition-colors">
                      {prevPost.title}
                    </p>
                  </div>
                </a>
              ) : <div />}

              {nextPost && (
                <a
                  href={`/blog/${nextPost.slug}`}
                  className="group flex items-start gap-3 p-4 rounded-xl border border-border/40 hover:border-neon-purple/40 transition-all sm:text-right sm:flex-row-reverse"
                >
                  <ArrowRight className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-neon-purple transition-colors flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Next</p>
                    <p className="font-display font-semibold text-sm line-clamp-2 group-hover:text-neon-purple transition-colors">
                      {nextPost.title}
                    </p>
                  </div>
                </a>
              )}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> Back to all articles
              </a>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
