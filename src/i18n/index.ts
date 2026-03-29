import { de } from './de';
import { tr } from './tr';

export type { Translations } from './de';
export type Lang = 'de' | 'tr';

export function useTranslations(lang: Lang = 'de') {
  return lang === 'tr' ? tr : de;
}
