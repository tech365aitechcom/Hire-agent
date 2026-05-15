export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string; // HTML
  coverImage: string;
  author: string;
  publishedAt: string; // ISO date
  tags: string[];
  readTime: number; // minutes
}

const STORAGE_KEY = 'hireagent_blogs';

const samplePosts: BlogPost[] = [
  {
    id: '1',
    slug: 'how-ai-voice-bots-transform-customer-support-2026',
    title: 'How AI Voice Bots Are Transforming Customer Support in 2026',
    metaTitle: 'How AI Voice Bots Are Transforming Customer Support in 2026 | HireAgent',
    metaDescription: 'Discover how AI voice bots are revolutionising customer support with 24/7 availability, instant responses, and 80% cost reduction. Learn how businesses deploy AI voice agents.',
    excerpt: 'AI voice bots are no longer a futuristic concept — they are the backbone of modern customer support. Discover how businesses are cutting costs by 80% while improving satisfaction scores.',
    content: `<h2>The Rise of AI Voice Bots in Customer Support</h2>
<p>Customer expectations have never been higher. Today's consumers demand instant, 24/7 support across every channel. Traditional call centres — expensive, slow, and limited by human working hours — simply can't keep up.</p>
<p>Enter AI voice bots: intelligent, human-like voice assistants that handle customer calls, resolve queries, and escalate complex issues — all without a single human agent involved.</p>
<h2>Key Benefits of AI Voice Bots</h2>
<ul>
<li><strong>24/7 Availability:</strong> Never miss a customer call, even at 3 am.</li>
<li><strong>80% Cost Reduction:</strong> Dramatically lower support costs compared to human agents.</li>
<li><strong>Instant Response:</strong> Zero hold time. Customers get answers in seconds.</li>
<li><strong>Consistent Quality:</strong> Every interaction follows best practices, every single time.</li>
<li><strong>Multilingual Support:</strong> Serve global customers in 50+ languages.</li>
</ul>
<h2>Real-World Results</h2>
<p>Businesses using HireAgent's AI voice bots report a 95% customer satisfaction rate and a 60% reduction in average handle time. Healthcare providers use AI to handle appointment reminders, cutting no-shows by 40%. Fintech companies automate loan-inquiry calls, processing 10× more leads without hiring additional staff.</p>
<h2>Getting Started with AI Voice Bots</h2>
<p>Deploying an AI voice bot with HireAgent takes minutes, not months. No complex code, no expensive infrastructure. Simply define your use case, train the AI on your knowledge base, and go live. Scale from 10 to 10,000 concurrent calls instantly.</p>`,
    coverImage: '',
    author: 'HireAgent Team',
    publishedAt: '2026-05-01T00:00:00.000Z',
    tags: ['AI Voice Bot', 'Customer Support', 'Automation'],
    readTime: 5,
  },
  {
    id: '2',
    slug: '5-ways-automate-sales-pipeline-ai-voice-agents',
    title: '5 Ways to Automate Your Sales Pipeline with AI Voice Agents',
    metaTitle: '5 Ways to Automate Your Sales Pipeline with AI Voice Agents | HireAgent',
    metaDescription: 'Learn 5 proven ways AI voice agents automate your sales pipeline — from lead qualification to appointment booking and follow-ups. Increase conversions and scale faster.',
    excerpt: 'From qualifying leads at scale to booking appointments automatically, AI voice agents are the secret weapon of high-performing sales teams in 2026.',
    content: `<h2>Why AI Voice Agents Are the Future of Sales Automation</h2>
<p>The modern sales team faces an impossible task: contact every lead fast, qualify them accurately, follow up persistently, and still have time to close deals. AI voice agents solve this by handling top-of-funnel work automatically, 24/7.</p>
<h2>1. Instant Lead Response</h2>
<p>Studies show leads contacted within 5 minutes are 9× more likely to convert. AI voice agents call new leads the moment they submit a form — day or night — ensuring you never lose a hot prospect to slow follow-up.</p>
<h2>2. Automated Lead Qualification</h2>
<p>Your AI agent asks the right qualification questions, scores leads based on your criteria, and routes high-value prospects directly to your sales team — while nurturing lower-priority leads automatically.</p>
<h2>3. Appointment Booking at Scale</h2>
<p>AI voice agents integrate with your calendar to schedule demos and consultations automatically. No back-and-forth emails. No scheduling conflicts. Just booked meetings.</p>
<h2>4. Persistent Follow-Up</h2>
<p>80% of sales require 5+ follow-up touchpoints. AI agents handle every follow-up call automatically, maintaining consistent outreach without burning out your team.</p>
<h2>5. CRM Auto-Update</h2>
<p>Every call is logged, transcribed, and synced to your CRM (Salesforce, HubSpot, Zoho) automatically. Your sales team walks into every conversation with full context.</p>
<h2>The Bottom Line</h2>
<p>Companies using AI voice agents for sales report a 3× increase in qualified leads and a 50% reduction in cost-per-acquisition. The competitive advantage is real — and the time to deploy is now.</p>`,
    coverImage: '',
    author: 'HireAgent Team',
    publishedAt: '2026-05-08T00:00:00.000Z',
    tags: ['Sales Automation', 'AI Voice Agent', 'Lead Generation'],
    readTime: 4,
  },
  {
    id: '3',
    slug: 'ai-chatbots-vs-voice-bots-which-is-right-for-your-business',
    title: 'AI Chatbots vs Voice Bots: Which Is Right for Your Business?',
    metaTitle: 'AI Chatbots vs Voice Bots: Which Is Right for Your Business? | HireAgent',
    metaDescription: 'Confused between AI chatbots and voice bots? Compare features, use cases, and ROI to decide which AI automation solution fits your business best.',
    excerpt: 'Chatbots handle text. Voice bots handle calls. But choosing between them — or using both — depends on your customers and use case. Here is the complete breakdown.',
    content: `<h2>Understanding the Difference</h2>
<p>Both AI chatbots and voice bots automate customer interactions — but through different channels. Chatbots handle text-based conversations on websites, WhatsApp, and messaging apps. Voice bots handle phone calls with human-like speech.</p>
<h2>When to Choose AI Chatbots</h2>
<ul>
<li>Your customers prefer typing over talking</li>
<li>You need to support website visitors 24/7</li>
<li>You want to automate WhatsApp, Facebook Messenger, or Slack support</li>
<li>Your use cases involve rich media (images, buttons, carousels)</li>
<li>You need to qualify website leads instantly</li>
</ul>
<h2>When to Choose AI Voice Bots</h2>
<ul>
<li>Your customers call you on the phone</li>
<li>You have high inbound call volumes to manage</li>
<li>You need to make outbound calls for follow-ups or reminders</li>
<li>Your customers are less tech-savvy and prefer voice</li>
<li>Speed and urgency are critical (loan approvals, medical appointments)</li>
</ul>
<h2>The ROI Comparison</h2>
<p>Both solutions deliver significant ROI. Voice bots typically show faster ROI in healthcare and fintech where phone calls dominate. Chatbots show faster ROI in e-commerce and SaaS where website traffic is the primary lead source.</p>
<h2>The Best Answer: Use Both</h2>
<p>HireAgent lets you deploy both voice bots AND chatbots under one platform. Customers can reach you however they prefer — and receive the same consistent, intelligent AI-powered experience across every channel. This omnichannel approach delivers the highest customer satisfaction and the fastest path to ROI.</p>`,
    coverImage: '',
    author: 'HireAgent Team',
    publishedAt: '2026-05-12T00:00:00.000Z',
    tags: ['AI Chatbot', 'Voice Bot', 'Comparison'],
    readTime: 4,
  },
];

function initStore(): void {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(samplePosts));
  }
}

export function getAllPosts(): BlogPost[] {
  initStore();
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    const posts: BlogPost[] = data ? JSON.parse(data) : [];
    return posts.sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  } catch {
    return [...samplePosts];
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function savePost(post: BlogPost): void {
  const posts = getAllPosts();
  const idx = posts.findIndex((p) => p.id === post.id);
  if (idx >= 0) {
    posts[idx] = post;
  } else {
    posts.unshift(post);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function deletePost(id: string): void {
  const posts = getAllPosts().filter((p) => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function calcReadTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export const ADMIN_PASSWORD = 'HireAgent@2026';
