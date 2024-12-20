import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator.component';

@Component({
  imports: [CalculatorComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rent-buy-calc';
}
