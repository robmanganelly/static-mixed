export type HomeOwningInputs = {
  // Buying inputs
  annualMaintenance: number; // Annual maintenance costs
  propertyTaxRate: number; // Annual property tax as a percentage of home value
  appreciationRate: number; // Annual property appreciation rate
  mortgageRate: number; // Annual mortgage interest rate
};

export type RentInputs = {
  // Renting inputs
  rentIncreaseRate: number; // Annual rent increase rate
  investmentReturnRate: number; // Annual investment return rate (opportunity cost)
};

export type MovingDataPointsInputs = {
  homePrice: number; // Cost of the home
  downPaymentRate: number; // Percentage of home price for down payment
  monthlyRent: number; // Initial monthly rent
  years: number; // Number of years to compare

  //reactive inputs
};

export type CalculatorResult = {
  totalBuyingCost: number;
  totalRentingCost: number;
  difference: number;
  recommendation: 'buy' | 'rent';
};


export type InputState = RentInputs & HomeOwningInputs & MovingDataPointsInputs
