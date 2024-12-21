import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Slider } from 'primeng/slider';
import { Card } from 'primeng/card';
import { InputNumber } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { calculatorStore } from '../../data/calculator.store';

@Component({
  selector: 'app-moving-controls',
  imports: [Slider, Card, InputNumber, FormsModule],
  templateUrl: './moving-controls.component.html',
  styleUrl: './moving-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovingControlsComponent {
  #store = inject(calculatorStore);

  readonly homePrice = this.#store.homePrice;
  readonly downPaymentRate = this.#store.downPaymentRate;
  readonly monthlyRent = this.#store.monthlyRent;
  readonly years = this.#store.years;

  readonly values = {
    homePrice: { min: 10 ** 5, max: 10 ** 7 },
    downPaymentRate: { min: 1, max: 100 },
    monthlyRent: { min: 500, max: 10000 },
    years: { min: 1, max: 30 },
  };

  sethomePrice(homePrice: number) {
    this.#store.patchLive({ homePrice });
  }

  setdownPaymentRate(downPaymentRate: number) {
    this.#store.patchLive({ downPaymentRate });
  }

  setmonthlyRent(monthlyRent: number) {
    this.#store.patchLive({ monthlyRent });
  }

  setyears(years: number) {
    this.#store.patchLive({ years });
  }
}
