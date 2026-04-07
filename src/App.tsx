import { MahdavaUIProvider, MarkdownRenderer, type LinkRendererProps } from '@mahdava/ui'
import { useEffect, useMemo, useState } from 'react'
import './App.css'

type ListEntry = {
  slug: string
  title: string
  markdown: string
}

const markdownModules = import.meta.glob<string>('./lists/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const toTitleCase = (value: string) =>
  value
    .split(/[-_]/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const parseTitle = (markdown: string, fallback: string) => {
  const firstHeading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim()
  return firstHeading || toTitleCase(fallback)
}

const lists: ListEntry[] = Object.entries(markdownModules)
  .map(([path, markdown]) => {
    const slug = path.split('/').pop()?.replace(/\.md$/, '')

    if (!slug) {
      return null
    }

    return {
      slug,
      title: parseTitle(markdown, slug),
      markdown,
    }
  })
  .filter((entry): entry is ListEntry => entry !== null)
  .sort((a, b) => a.title.localeCompare(b.title))

const defaultSlug = lists[0]?.slug ?? ''

const normalizePath = (pathname: string) => pathname.replace(/^\/+|\/+$/g, '')

const resolveSlugFromLocation = () => {
  const pathname = normalizePath(window.location.pathname)

  if (!pathname) {
    return defaultSlug
  }

  return pathname.split('/')[0] || defaultSlug
}

const navigateToSlug = (slug: string) => {
  const target = slug ? `/${slug}` : '/'
  window.history.pushState({}, '', target)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

const AppLink = ({ href = '#', children, ...props }: LinkRendererProps) => (
  <a href={href} {...props}>
    {children}
  </a>
)

function App() {
  const [currentSlug, setCurrentSlug] = useState(resolveSlugFromLocation)
  const [isMissingRoute, setIsMissingRoute] = useState(false)

  useEffect(() => {
    const syncFromLocation = () => {
      const nextSlug = resolveSlugFromLocation()
      const exists = lists.some((entry) => entry.slug === nextSlug)

      setCurrentSlug(exists ? nextSlug : defaultSlug)
      setIsMissingRoute(Boolean(nextSlug) && !exists)
    }

    syncFromLocation()
    window.addEventListener('popstate', syncFromLocation)

    return () => {
      window.removeEventListener('popstate', syncFromLocation)
    }
  }, [])

  const activeList = useMemo(() => {
    return lists.find((entry) => entry.slug === currentSlug) ?? lists[0] ?? null
  }, [currentSlug])

  return (
    <MahdavaUIProvider linkComponent={AppLink}>
      <div className="min-h-screen">
        <header className="flex flex-col items-stretch justify-between gap-4 px-4 pt-4 md:flex-row md:items-center md:px-8 md:pt-6">
          <p className="m-0 text-xs font-bold uppercase tracking-[0.12em] text-(--accent-2)">
            Lusse lists
          </p>

          <nav className="w-full md:w-[min(100%,36rem)]" aria-label="Lists">
            <div className="flex flex-wrap gap-3 md:justify-end">
              {lists.map((entry) => {
                const isActive = activeList?.slug === entry.slug

                return (
                  <a
                    key={entry.slug}
                    className={`inline-flex min-h-10 items-center rounded-full border px-3 py-2 text-sm leading-tight transition-colors md:px-3.5 ${
                      isActive
                        ? 'border-black/15 bg-black/10 font-medium text-black'
                        : 'border-black/10 bg-white/60 text-black/75 hover:bg-black/5'
                    }`}
                    href={`/${entry.slug}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={(event) => {
                      event.preventDefault()
                      setCurrentSlug(entry.slug)
                      navigateToSlug(entry.slug)
                    }}
                  >
                    {entry.title}
                  </a>
                )
              })}
            </div>
          </nav>
        </header>

        <main className="min-w-0 px-4 pb-4 pt-6 md:px-8 md:pb-8" id="main-content">
          {activeList ? (
            <article className="mx-auto w-full max-w-[60rem] rounded-3xl border border-[color-mix(in_srgb,var(--border1)_70%,transparent)] bg-[color-mix(in_srgb,var(--surface0)_92%,transparent)] p-[clamp(1.25rem,2vw,2rem)] text-left shadow-[0_24px_70px_color-mix(in_srgb,var(--primary)_10%,transparent)]">
              {isMissingRoute ? (
                <p className="mb-4 rounded-xl border border-[color-mix(in_srgb,var(--primary)_35%,transparent)] bg-[color-mix(in_srgb,var(--primary)_10%,var(--surface1))] px-4 py-3 text-(--foreground-muted)">
                  That list does not exist yet, showing <strong>{activeList.title}</strong> instead.
                </p>
              ) : null}
              <MarkdownRenderer className="content__markdown" markdown={activeList.markdown} />
            </article>
          ) : (
            <article className="mx-auto w-full max-w-[60rem] rounded-3xl border border-[color-mix(in_srgb,var(--border1)_70%,transparent)] bg-[color-mix(in_srgb,var(--surface0)_92%,transparent)] p-[clamp(1.25rem,2vw,2rem)] text-left shadow-[0_24px_70px_color-mix(in_srgb,var(--primary)_10%,transparent)]">
              <h2 className="mt-0 text-left">No lists yet</h2>
              <p>Add a markdown file in <code>src/lists</code> to get started.</p>
            </article>
          )}
        </main>
      </div>
    </MahdavaUIProvider>
  )
}

export default App
