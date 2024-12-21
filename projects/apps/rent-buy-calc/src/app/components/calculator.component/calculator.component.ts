import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { OwningCostsComponent } from '../owning-costs.component/owning-costs.component';
import { RentCostsComponent } from '../rent-costs.component/rent-costs.component';
import { ResultsComponent } from '../results/results.component';
import { MovingControlsComponent } from '../moving-controls.component/moving-controls.component';

@Component({
  selector: 'app-calculator',
  imports: [

    ReactiveFormsModule,
    OwningCostsComponent,
    RentCostsComponent,
    ResultsComponent,
    MovingControlsComponent
],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {}
