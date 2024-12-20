import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { Slider } from 'primeng/slider';
import { Card } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { OwningCostsComponent } from '../owning-costs.component/owning-costs.component';
import { RentCostsComponent } from '../rent-costs.component/rent-costs.component';

@Component({
  selector: 'app-calculator',
  imports: [
    InputText,
    Slider,
    Card,
    ReactiveFormsModule,
    OwningCostsComponent,
    RentCostsComponent
],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
