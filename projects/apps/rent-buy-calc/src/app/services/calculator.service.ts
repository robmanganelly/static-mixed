import { Injectable } from '@angular/core';
import {
  CalculatorResult,
  InputState,
} from '../models/calculator.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  buyRentCalculator(
    args: InputState
  ): CalculatorResult {
    const {
      homePrice,
      downPaymentRate,
      mortgageRate,
      propertyTaxRate,
      annualMaintenance,
      appreciationRate,
      monthlyRent,
      rentIncreaseRate,
      investmentReturnRate,
      years,
    } = args;

    // Calculate buying costs
    const downPayment = homePrice * downPaymentRate;
    let mortgageBalance = homePrice - downPayment;
    let totalBuyingCost = downPayment; // Start with the down payment
    let equity = downPayment;

    for (let year = 1; year <= years; year++) {
      // Mortgage interest and principal (simple annual approximation)
      const annualMortgagePayment = mortgageBalance * mortgageRate;
      equity += mortgageBalance * appreciationRate; // Add appreciation
      mortgageBalance -= equity * (1 / years); // Approximate equity growth yearly
      totalBuyingCost += annualMortgagePayment;

      // Add property taxes and maintenance
      totalBuyingCost += homePrice * propertyTaxRate + annualMaintenance;
    }

    // Adjust for home value appreciation
    const finalHomeValue = homePrice * Math.pow(1 + appreciationRate, years);
    totalBuyingCost -= finalHomeValue - mortgageBalance; // Subtract net equity

    // Calculate renting costs
    let totalRentingCost = 0;
    let currentRent = monthlyRent;
    for (let year = 1; year <= years; year++) {
      totalRentingCost += currentRent * 12; // Add annual rent
      currentRent *= 1 + rentIncreaseRate; // Apply rent increase
    }

    // Adjust for opportunity cost (investment returns on saved money)
    const investmentReturn =
      downPayment * Math.pow(1 + investmentReturnRate, years);
    totalRentingCost -= investmentReturn;

    // Determine the recommendation
    const difference = totalBuyingCost - totalRentingCost;
    const recommendation = difference <= 0 ? 'buy' : 'rent';

    return {
      totalBuyingCost,
      totalRentingCost,
      difference,
      recommendation,
    };
  }
}
