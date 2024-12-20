import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorInput } from '../../models/calculator.model';
import { InputTextModule } from 'primeng/inputtext';
import { SliderModule } from 'primeng/slider';
import { Card } from 'primeng/card';
import { Divider } from 'primeng/divider';
import { Fluid } from 'primeng/fluid';

@Component({
  selector: 'app-calculator',
  imports: [InputTextModule, SliderModule, Card, Divider, Fluid],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  inputd: CalculatorInput = {
    homePrice: 300000,
    downPaymentRate: 0.2,
    mortgageRate: 0.05,
    propertyTaxRate: 0.012,
    annualMaintenance: 2000,
    appreciationRate: 0.03,
    monthlyRent: 1500,
    rentIncreaseRate: 0.02,
    investmentReturnRate: 0.06,
    years: 10,
  };
}
