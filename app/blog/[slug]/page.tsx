import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import CTA from '@/components/cta'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { blogPosts, getBlogPost, site } from '@/lib/site-content'

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: `Article Not Found - ${site.name}`,
    }
  }

  return {
    title: `${post.title} - ${site.name}`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article>
        <section className="border-b border-border py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Link href="/blog" className="inline-flex text-primary font-semibold hover:text-primary/80 transition-colors">
              &lt;- Back to Blog
            </Link>

            <div className="space-y-5">
              <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
                <span className="text-primary font-semibold">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-foreground/75 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <figure className="space-y-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-border">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 960px, 100vw"
                />
              </div>
              <figcaption className="text-sm text-foreground/55">
                {post.imageAlt}
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="py-16 md:py-20 border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <p className="text-xl text-foreground/85 leading-relaxed">
              {post.intro}
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-lg text-foreground/75 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <section className="rounded-lg border border-border bg-secondary/15 p-6 md:p-8 space-y-5">
              <h2 className="text-2xl font-bold text-foreground">
                Quick Checklist
              </h2>
              <ul className="space-y-3">
                {post.checklist.map((item) => (
                  <li key={item} className="flex gap-3 text-foreground/75 leading-relaxed">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-lg border border-primary/40 bg-primary/10 p-6 md:p-8 space-y-3">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Shopping Note
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {post.shoppingNote}
              </p>
            </section>
          </div>
        </section>
      </article>

      <section className="py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                More Articles
              </p>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Continue Reading
              </h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex text-primary font-semibold hover:text-primary/80 transition-colors">
              View all posts -&gt;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((item) => (
              <article key={item.slug} className="rounded-lg border border-border bg-secondary/15 overflow-hidden">
                <Link href={`/blog/${item.slug}`} className="block relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </Link>
                <div className="p-6 space-y-3">
                  <p className="text-sm text-primary font-semibold">{item.category}</p>
                  <Link href={`/blog/${item.slug}`}>
                    <h3 className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-foreground/65 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
