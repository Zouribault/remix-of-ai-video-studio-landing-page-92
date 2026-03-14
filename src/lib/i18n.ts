import type { Language } from '@/lib/translations'

/**
 * Pick the value for `language` from a per-language record.
 * Falls back to English, then to the first available key.
 */
export function pick<T>(lang: Language, map: Partial<Record<Language, T>>): T {
  return (map[lang] ?? map.en ?? Object.values(map)[0]) as T
}
