import { Component } from '@angular/core';
import { CalculatorComponent } from './components/calculator.component/calculator.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  imports: [CalculatorComponent, ToolbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Rent or Buy';
}
