export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
