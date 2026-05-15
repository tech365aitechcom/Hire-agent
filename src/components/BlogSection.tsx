import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blogStore';

export function BlogSection() {
  const posts = useMemo(() => getAllPosts().slice(0, 3), []);

  return (
    <section className="relative py-24 lg:py-32 px-4">
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 rounded-full bg-neon-blue/10 blur-[128px]" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-neon-purple/10 px-4 py-1.5 text-sm text-neon-purple border border-neon-purple/20">
            From Our Blog
          </span>
          <h2 className="font-display text-3xl font-bold lg:text-5xl mb-4">
            AI Insights &{' '}
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Best Practices
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Learn how to deploy AI voice bots, automate sales, and scale customer support from our expert team.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border/40 bg-card/50 hover:border-neon-purple/40 hover:bg-card transition-all overflow-hidden"
            >
              {post.coverImage ? (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-44 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-neon-purple/40" />
                </div>
              )}

              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
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

                <h3 className="font-display font-bold text-base mb-2 line-clamp-2 group-hover:text-neon-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 flex-1 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {post.readTime} min read
                  </span>
                  <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-neon-purple/30 bg-neon-purple/10 px-6 py-3 text-sm font-semibold text-neon-purple hover:bg-neon-purple/20 transition-all group"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
