import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HomeOwningInputs } from '../../models/calculator.model';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';
import { calculatorStore } from '../../data/calculator.store';
import { InputNumber } from 'primeng/inputnumber';
import { MetaForm } from '@oc/ui-utils';

@Component({
  selector: 'app-owning-costs',
  imports: [ReactiveFormsModule, Card, Divider, Button, InputNumber],
  templateUrl: './owning-costs.component.html',
  styleUrl: './owning-costs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwningCostsComponent {
  #nfb = inject(NonNullableFormBuilder);

  #store = inject(calculatorStore);

  homeOwnerForm = this.#nfb.group<MetaForm<HomeOwningInputs>>({
    annualMaintenance: this.#nfb.control(this.#store.annualMaintenance(), {
      validators: [Validators.min(1_000), Validators.max(400_000), Validators.required],
    }),
    propertyTaxRate: this.#nfb.control(this.#store.propertyTaxRate(), {
      validators: [Validators.min(0.1), Validators.max(3), Validators.required],
    }),
    appreciationRate: this.#nfb.control(this.#store.appreciationRate(), {
      validators: [Validators.min(-10), Validators.max(10), Validators.required],
    }),
    mortgageRate: this.#nfb.control(this.#store.mortgageRate(), {
      validators: [Validators.min(0), Validators.max(10), Validators.required],
    }),
  });

  submit(){
    if(this.homeOwnerForm.invalid) return;
    this.#store.updateOwningCosts(this.homeOwnerForm.value)
  }
}

// validators:
//   - annualMaintenance:
//       min: 1000
//       max: 400000
//   - propertyTaxRate:
//       min: 0
//       max: 3
//   - appreciationRate:
//       min: -10
//       max: 10
//   - mortgageRate:
//       min: 0
//       max: 10
