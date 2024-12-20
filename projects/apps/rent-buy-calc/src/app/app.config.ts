import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BlueAuraPreset, DARK_THEME_SELECTOR, withDefaultTheme } from '@oc/ui-theme-utils';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideAppInitializer(() => {
      withDefaultTheme('light');
    }),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: BlueAuraPreset,
        options: {
          darkModeSelector: DARK_THEME_SELECTOR,
          cssLayer: {
            name: 'primeng',
            order: 'tailwind-base, primeng, tailwind-utilities',
          },
        },
      },
    }),
    provideRouter(appRoutes),
  ],
};
