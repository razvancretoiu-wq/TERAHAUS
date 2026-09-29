export default function SocialMedia() {
  const socials = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@terahaus",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.4a6.33 6.33 0 1 0 5.45 6.27V8.73a8.16 8.16 0 0 0 4.77 1.52V6.81a4.85 4.85 0 0 1-1-.12Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/terahaus.ro/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/TeraHaus-61583745029158/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
          aria-hidden="true"
        >
          <path d="M13.5 22v-9h3l.5-3.5h-3.5V7.25c0-1 .28-1.75 1.8-1.75H17V2.14A22.6 22.6 0 0 0 14.35 2C11.72 2 10 3.6 10 6.55V9.5H7V13h3v9h3.5Z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="border-t border-neutral-200 bg-neutral-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8732D]">
          Social Media
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Urmărește TERAHAUS
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-neutral-600 md:text-base">
          Idei, proiecte și inspirație pentru amenajări interioare și exterioare.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TERAHAUS pe ${social.name}`}
              className="group flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8732D] hover:bg-[#C8732D] hover:text-white hover:shadow-lg"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-7 text-xs uppercase tracking-wider text-neutral-500">
          <span>TikTok</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
    </section>
  )
}