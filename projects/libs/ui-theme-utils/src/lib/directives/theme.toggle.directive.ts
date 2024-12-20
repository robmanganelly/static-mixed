import { Directive, HostListener, inject, Renderer2 } from '@angular/core';
import { DARK_THEME_SELECTOR_CLASS } from '../shared/dark.theme.constant';
import { DOCUMENT } from '@angular/common';
import { isDarkTheme } from '../shared/theme.initializer';

@Directive({
  selector: '[ocThemeToggle]',
})
export class ThemeToggleDirective {
  #renderer = inject(Renderer2);

  #document = inject(DOCUMENT);

  #html = this.#document.documentElement;

  isDark(): boolean {
    return isDarkTheme(this.#document);
  }

  @HostListener('click', ['$event'])
  toggle(e: MouseEvent) {
    e.preventDefault();
    e.stopImmediatePropagation();
    //
    if (this.isDark())
      this.#renderer.removeClass(this.#html, DARK_THEME_SELECTOR_CLASS);
    else this.#renderer.addClass(this.#html, DARK_THEME_SELECTOR_CLASS);
  }
}
