import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleDirective } from '@oc/ui-theme-utils';

@Component({
  selector: 'app-calculator',
  imports: [CommonModule, ThemeToggleDirective],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
