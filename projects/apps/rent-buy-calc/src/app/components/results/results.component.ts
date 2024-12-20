import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { calculatorStore } from '../../data/calculator.store';
import { watchState } from '@ngrx/signals';

@Component({
  selector: 'app-results',
  imports: [
    ReactiveFormsModule
],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  #store = inject(calculatorStore);

  state = '';

  c = watchState(this.#store, (s) => (this.state = JSON.stringify(s)));
}
