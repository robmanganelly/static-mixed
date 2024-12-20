import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { isDarkTheme, ThemeToggleDirective } from '@oc/ui-theme-utils';
import { Button } from 'primeng/button';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [ThemeToggleDirective, Toolbar, Button],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  #doc = inject(DOCUMENT);

  get isDark() {
    return isDarkTheme(this.#doc);
  }
}
