import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RentInputs } from '../../models/calculator.model';
import { calculatorStore } from '../../data/calculator.store';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-rent-costs',
  imports: [Card, Divider, Button, ReactiveFormsModule],
  templateUrl: './rent-costs.component.html',
  styleUrl: './rent-costs.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentCostsComponent {
  #nfb = inject(NonNullableFormBuilder);


  #store = inject(calculatorStore);


  rentCostsForm = this.#nfb.group<RentInputs>({
    rentIncreaseRate: 0,
    investmentReturnRate: 0,
  });
}
