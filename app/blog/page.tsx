import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PageHero from '@/components/page-hero'
import { blogPosts } from '@/lib/site-content'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Blog"
        title="Fashion, Beauty, and Shopping Notes"
        description="Editorial-style guides for readers comparing products, building outfits, and deciding which style ideas are worth trying."
      />

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.title} className="rounded-lg border border-border bg-secondary/15 overflow-hidden">
                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </Link>
                <div className="p-7 space-y-4">
                  <div className="flex flex-wrap gap-3 text-sm text-foreground/60">
                    <span className="text-primary font-semibold">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold text-foreground leading-snug hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-foreground/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex text-primary font-semibold hover:text-primary/80 transition-colors">
                    Read Post -&gt;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
