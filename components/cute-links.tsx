'use client'

import { ArrowUpRight, Music2, Send } from 'lucide-react'

const LINKS = [
  {
    label: 'TikTok',
    desc: '@akiyama.mindset.upgr',
    href: 'http://tiktok.com/@akiyama.mindset.upgr',
    icon: <Music2 className="size-5" aria-hidden="true" />,
    color: '#18181b'
  },
  {
    label: 'Telegram',
    desc: '@akiayama_mindset',
    href: 'https://t.me/akiayama_mindset',
    icon: <Send className="size-5" aria-hidden="true" />,
    color: '#3f3f46'
  },
]

export function CuteLinks() {
  return (
    <nav aria-label="Мои ссылки" className="flex w-full flex-col gap-1.5 sm:gap-3">
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 rounded-xl border border-white/40 bg-white/30 px-2.5 py-1.5 sm:gap-3 sm:rounded-2xl sm:p-3 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/50 hover:shadow-xl active:scale-95"
        >
          {/* Accent glow on hover */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ backgroundColor: link.color }}
          />

          <span
            className="relative z-10 flex size-7 sm:size-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-white/60 text-foreground shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground"
          >
            {link.icon}
          </span>

          <span className="relative z-10 min-w-0 flex-1">
            <span className="block text-xs font-bold tracking-tight sm:text-sm">{link.label}</span>
            <span className="block truncate text-[9px] sm:text-[11px] text-muted-foreground/80">{link.desc}</span>
          </span>

          <ArrowUpRight
            className="relative z-10 size-4 shrink-0 text-muted-foreground/50 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
            aria-hidden="true"
          />
        </a>
      ))}
    </nav>
  )
}
