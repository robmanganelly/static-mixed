import { DARK_THEME_SELECTOR_CLASS } from './dark.theme.constant';
import { Themes, DefaultTheme } from '../models/themes.model';
import { inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


export function isDarkTheme(doc: Document): boolean {
  return doc.documentElement.classList.contains(DARK_THEME_SELECTOR_CLASS);
}


/**
 * gets preferred theme based on browser preferences
 * @param doc
 * @returns
 */
export const browserPreferred = (doc: Document | null): Themes => {
  const windowRef = doc?.defaultView;
  return windowRef &&
    windowRef.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

/**
 * applies preferred theme,
 * @param theme
 */

export function withDefaultTheme(theme: DefaultTheme): void {
  const doc = inject(DOCUMENT);
  const html = doc?.documentElement;

  switch (theme) {
    case 'dark':
      html?.classList.add(DARK_THEME_SELECTOR_CLASS);
      break;
    case 'light':
      break;
    case 'browser': {
      withDefaultTheme(browserPreferred(doc));
      break;
    }
  }
}
