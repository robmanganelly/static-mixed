import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HomeOwningInputs } from '../../models/calculator.model';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';
import { calculatorStore } from '../../data/calculator.store';
import { InputNumber } from 'primeng/inputnumber';

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

  homeOwnerForm = this.#nfb.group<HomeOwningInputs>({
    annualMaintenance: 0,
    propertyTaxRate: 0,
    appreciationRate: 0,
    mortgageRate: 0,
  });
}
