import { Mail, MapPin, Phone } from 'lucide-react'
import Footer from '@/components/footer'
import Header from '@/components/header'
import PageHero from '@/components/page-hero'
import { site } from '@/lib/site-content'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero
        eyebrow="Get in Touch"
        title="Let Us Help You Shape Your Next Style Move"
        description="Send a note about collaborations, affiliate partnerships, product submissions, or personal styling questions."
      />

      <section className="py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">
                Contact Details
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Questions, ideas, or partnership requests are welcome.
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                We review every message and prioritize notes with a clear topic, timeline, and product or content details.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex gap-4 items-start">
                <Mail className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a href={`mailto:${site.email}`} className="text-foreground/70 hover:text-primary">
                    {site.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Phone className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-foreground">Phone</p>
                  <a href={`tel:${site.phone.replaceAll(' ', '')}`} className="text-foreground/70 hover:text-primary">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1" size={22} />
                <div>
                  <p className="font-semibold text-foreground">Location</p>
                  <p className="text-foreground/70">{site.address}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-lg border border-border bg-secondary/15 p-6 md:p-8 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Name</span>
                <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground" placeholder="Your name" />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-foreground">Email</span>
                <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground" placeholder="you@example.com" type="email" />
              </label>
            </div>
            <label className="space-y-2 block">
              <span className="text-sm font-semibold text-foreground">Subject</span>
              <input className="w-full rounded-md border border-border bg-background px-4 py-3 text-foreground" placeholder="Partnership, product review, or style question" />
            </label>
            <label className="space-y-2 block">
              <span className="text-sm font-semibold text-foreground">Message</span>
              <textarea className="w-full min-h-40 rounded-md border border-border bg-background px-4 py-3 text-foreground" placeholder="Tell us what you need." />
            </label>
            <button className="px-7 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors" type="button">
              Send a Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
