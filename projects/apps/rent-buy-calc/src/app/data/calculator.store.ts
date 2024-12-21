import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  HomeOwningInputs,
  InputState,
  MovingDataPointsInputs,
  RentInputs,
} from '../models/calculator.model';
import { inject } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';

const initialState: InputState = {
  homePrice: 100000,
  downPaymentRate: 20,
  mortgageRate: 5,
  propertyTaxRate: 2.5,
  annualMaintenance: 1500,
  appreciationRate: 1,
  monthlyRent: 2000,
  rentIncreaseRate: 2.5,
  investmentReturnRate: 6,
  years: 10,
};

export const calculatorStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withProps(() => ({
    service: inject(CalculatorService),
  })),
  withMethods((store) => ({
    updateOwningCosts(payload: Partial<HomeOwningInputs>) {
      console.log('updateOwningCosts', payload);
      patchState(store, payload);
    },
    updateRentCosts(payload: Partial<RentInputs>) {
      console.log('updateRentCosts', payload);
      patchState(store, payload);
    },
    patchLive(state: Partial<MovingDataPointsInputs>) {
      console.log('patchLive', state);
      patchState(store, state);
    },
  }))
);
