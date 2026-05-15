import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import {
  Lock, Plus, Pencil, Trash2, Eye, EyeOff, Save, X,
  LogOut, Clock, Tag, RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  getAllPosts, savePost, deletePost, generateSlug, calcReadTime,
  ADMIN_PASSWORD, BlogPost,
} from '@/lib/blogStore';

const SESSION_KEY = 'ha_admin_auth';

const EMPTY_POST: Omit<BlogPost, 'id'> = {
  slug: '',
  title: '',
  metaTitle: '',
  metaDescription: '',
  excerpt: '',
  content: '',
  coverImage: '',
  author: 'HireAgent Team',
  publishedAt: new Date().toISOString(),
  tags: [],
  readTime: 1,
};

export default function AdminBlog() {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
  const [pw, setPw] = useState('');
  const [pwVisible, setPwVisible] = useState(false);
  const [pwError, setPwError] = useState('');

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [preview, setPreview] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [saved, setSaved] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const titleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (authed) setPosts(getAllPosts());
  }, [authed]);

  function login() {
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setAuthed(true);
      setPwError('');
    } else {
      setPwError('Incorrect password. Please try again.');
    }
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setAuthed(false);
    setEditing(null);
  }

  function openNew() {
    setEditing({ id: crypto.randomUUID(), ...EMPTY_POST, publishedAt: new Date().toISOString() });
    setIsNew(true);
    setPreview(false);
    setTimeout(() => titleRef.current?.focus(), 100);
  }

  function openEdit(post: BlogPost) {
    setEditing({ ...post });
    setIsNew(false);
    setPreview(false);
    setTagInput('');
  }

  function closeEditor() {
    setEditing(null);
    setIsNew(false);
    setPreview(false);
  }

  function handleField<K extends keyof BlogPost>(key: K, value: BlogPost[K]) {
    if (!editing) return;
    const updated = { ...editing, [key]: value };
    if (key === 'title') {
      updated.slug = generateSlug(value as string);
      if (!updated.metaTitle || isNew) updated.metaTitle = `${value} | HireAgent`;
    }
    if (key === 'content') {
      updated.readTime = calcReadTime(value as string);
    }
    setEditing(updated);
  }

  function addTag() {
    if (!editing || !tagInput.trim()) return;
    const tag = tagInput.trim();
    if (!editing.tags.includes(tag)) {
      handleField('tags', [...editing.tags, tag]);
    }
    setTagInput('');
  }

  function removeTag(tag: string) {
    if (!editing) return;
    handleField('tags', editing.tags.filter((t) => t !== tag));
  }

  function handleSave() {
    if (!editing) return;
    savePost(editing);
    setPosts(getAllPosts());
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    closeEditor();
  }

  function handleDelete(id: string) {
    deletePost(id);
    setPosts(getAllPosts());
    setDeleteConfirm(null);
  }

  /* ─── Login Screen ─── */
  if (!authed) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 rounded-2xl border border-border/40 bg-card/50 backdrop-blur"
        >
          <div className="flex justify-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon-purple to-neon-blue">
              <Lock className="h-7 w-7 text-white" />
            </div>
          </div>
          <h1 className="font-display text-2xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Enter your password to manage blog posts
          </p>

          <div className="space-y-4">
            <div className="relative">
              <Input
                type={pwVisible ? 'text' : 'password'}
                placeholder="Password"
                value={pw}
                onChange={(e) => { setPw(e.target.value); setPwError(''); }}
                onKeyDown={(e) => e.key === 'Enter' && login()}
                className="pr-10"
              />
              <button
                onClick={() => setPwVisible(!pwVisible)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                type="button"
              >
                {pwVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {pwError && <p className="text-sm text-destructive">{pwError}</p>}
            <Button
              className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
              onClick={login}
            >
              Sign In
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  /* ─── Editor ─── */
  if (editing) {
    return (
      <div className="min-h-screen bg-background">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur px-4 py-3">
          <div className="container mx-auto max-w-5xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button onClick={closeEditor} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <h2 className="font-display font-semibold">
                {isNew ? 'New Post' : 'Edit Post'}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setPreview(!preview)}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                {preview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {preview ? 'Edit' : 'Preview'}
              </button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
                onClick={handleSave}
                disabled={!editing.title || !editing.content}
              >
                <Save className="h-4 w-4 mr-1.5" />
                {saved ? 'Saved!' : 'Publish'}
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-5xl px-4 py-8">
          {preview ? (
            /* Preview */
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2 mb-4">
                {editing.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">
                    {t}
                  </span>
                ))}
              </div>
              <h1 className="font-display text-3xl font-bold mb-4">{editing.title || 'Untitled'}</h1>
              <div className="flex gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/40">
                <span>{editing.author}</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{editing.readTime} min read</span>
              </div>
              <div
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-foreground
                  prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed
                  prose-li:text-muted-foreground prose-strong:text-foreground
                  prose-a:text-neon-purple"
                dangerouslySetInnerHTML={{ __html: editing.content }}
              />
            </div>
          ) : (
            /* Form */
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Fields */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Title <span className="text-destructive">*</span></label>
                  <Input
                    ref={titleRef}
                    value={editing.title}
                    onChange={(e) => handleField('title', e.target.value)}
                    placeholder="Enter post title…"
                    className="text-lg font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Excerpt</label>
                  <textarea
                    value={editing.excerpt}
                    onChange={(e) => handleField('excerpt', e.target.value)}
                    placeholder="Short summary shown in listing cards…"
                    rows={3}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Content (HTML) <span className="text-destructive">*</span>
                  </label>
                  <p className="text-xs text-muted-foreground mb-2">
                    Use HTML tags: &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt;, &lt;a href=""&gt;
                  </p>
                  <textarea
                    value={editing.content}
                    onChange={(e) => handleField('content', e.target.value)}
                    placeholder="<h2>Section Heading</h2>&#10;<p>Your paragraph here...</p>"
                    rows={20}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono resize-y focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Auto read time: <strong>{editing.readTime} min</strong>
                  </p>
                </div>
              </div>

              {/* Sidebar Fields */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Slug</label>
                  <Input
                    value={editing.slug}
                    onChange={(e) => handleField('slug', e.target.value)}
                    placeholder="auto-generated-from-title"
                    className="text-xs font-mono"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Author</label>
                  <Input
                    value={editing.author}
                    onChange={(e) => handleField('author', e.target.value)}
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Publish Date</label>
                  <Input
                    type="date"
                    value={editing.publishedAt.slice(0, 10)}
                    onChange={(e) => handleField('publishedAt', new Date(e.target.value).toISOString())}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Cover Image URL</label>
                  <Input
                    value={editing.coverImage}
                    onChange={(e) => handleField('coverImage', e.target.value)}
                    placeholder="https://…"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <Input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                      placeholder="Add tag…"
                      className="flex-1"
                    />
                    <Button size="sm" variant="outline" onClick={addTag}>Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {editing.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="hover:text-destructive">
                          <X className="h-2.5 w-2.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">SEO</p>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Meta Title</label>
                      <Input
                        value={editing.metaTitle}
                        onChange={(e) => handleField('metaTitle', e.target.value)}
                        placeholder="SEO page title…"
                        className="text-xs"
                      />
                      <p className={`text-xs mt-1 ${editing.metaTitle.length > 60 ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {editing.metaTitle.length}/60 chars
                      </p>
                    </div>
                    <div>
                      <label className="block text-xs text-muted-foreground mb-1">Meta Description</label>
                      <textarea
                        value={editing.metaDescription}
                        onChange={(e) => handleField('metaDescription', e.target.value)}
                        placeholder="SEO description…"
                        rows={3}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                      <p className={`text-xs mt-1 ${editing.metaDescription.length > 160 ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {editing.metaDescription.length}/160 chars
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ─── Dashboard ─── */
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/90 backdrop-blur px-4 py-4">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-bold">Blog Admin</h1>
            <p className="text-xs text-muted-foreground">{posts.length} published posts</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              onClick={() => { setPosts(getAllPosts()); }}
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" /> Refresh
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:opacity-90"
              onClick={openNew}
            >
              <Plus className="h-4 w-4 mr-1.5" /> New Post
            </Button>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="container mx-auto max-w-5xl px-4 py-8">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">No posts yet.</p>
            <Button onClick={openNew} className="bg-gradient-to-r from-neon-purple to-neon-blue">
              <Plus className="h-4 w-4 mr-2" /> Create your first post
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-card/50 hover:border-neon-purple/20 transition-all"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold truncate">{post.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-muted-foreground">
                    <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />{post.readTime} min
                    </span>
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />{t}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <a
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    title="View post"
                  >
                    <Eye className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => openEdit(post)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-neon-purple hover:bg-neon-purple/10 transition-colors"
                    title="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  {deleteConfirm === post.id ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-2 py-1 text-xs rounded bg-destructive text-destructive-foreground hover:opacity-90"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setDeleteConfirm(null)}
                        className="px-2 py-1 text-xs rounded border border-border hover:bg-muted"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setDeleteConfirm(post.id)}
                      className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
