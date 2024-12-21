import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RentInputs } from '../../models/calculator.model';
import { calculatorStore } from '../../data/calculator.store';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { MetaForm } from '@oc/ui-utils';

@Component({
  selector: 'app-rent-costs',
  imports: [Card, Divider, Button, ReactiveFormsModule, InputNumber],
  templateUrl: './rent-costs.component.html',
  styleUrl: './rent-costs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentCostsComponent {
  #nfb = inject(NonNullableFormBuilder);

  #store = inject(calculatorStore);

  rentCostsForm = this.#nfb.group<MetaForm<RentInputs>>({
    rentIncreaseRate: this.#nfb.control(this.#store.rentIncreaseRate(), {
      validators: [Validators.required, Validators.min(0), Validators.max(5)],
    }),
    investmentReturnRate: this.#nfb.control(
      this.#store.investmentReturnRate(),
      {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(10),
        ],
      }
    ),
  });

  submit() {
    if (this.rentCostsForm.invalid) return;
    this.#store.updateRentCosts(this.rentCostsForm.value);
    this.rentCostsForm.markAsPristine();
  }
}
