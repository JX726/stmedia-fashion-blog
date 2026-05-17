import Link from 'next/link'

export default function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">ST Media</h3>
            <p className="text-foreground/70 max-w-xs">
              Fashion inspiration, affiliate shopping guides, and practical style advice for confident decisions.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row gap-8 md:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60">
            Copyright &copy; 2026 ST Media Vietnam. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
              Twitter
            </Link>
            <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
              Instagram
            </Link>
            <Link href="/blog" className="text-foreground/70 hover:text-primary transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
