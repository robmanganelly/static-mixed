import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeToggleDirective, isDarkTheme } from '@oc/ui-theme-utils';
import { Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-calculator',
  imports: [ThemeToggleDirective, Toolbar, ButtonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {

  #doc = inject(DOCUMENT);

  get isDark(){
    return isDarkTheme(this.#doc);
  }

}
