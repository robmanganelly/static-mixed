export type CalculatorInput = {
  // Buying inputs
  homePrice: number; // Cost of the home
  downPaymentRate: number; // Percentage of home price for down payment
  mortgageRate: number; // Annual mortgage interest rate
  propertyTaxRate: number; // Annual property tax as a percentage of home value
  annualMaintenance: number; // Annual maintenance costs
  appreciationRate: number; // Annual property appreciation rate

  // Renting inputs
  monthlyRent: number; // Initial monthly rent
  rentIncreaseRate: number; // Annual rent increase rate

  // General inputs
  investmentReturnRate: number; // Annual investment return rate (opportunity cost)
  years: number; // Number of years to compare
};

export type CalculatorResult = {
  totalBuyingCost: number;
  totalRentingCost: number;
  difference: number;
  recommendation: 'buy' | 'rent';
};
