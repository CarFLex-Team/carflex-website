export default interface CarDetails {
  carId: string;
  postalCode: string;
  mileage: string;
  transmission: string;
  soleOwner: boolean;
  colour: string;
  exteriorDamage: string[];
  features: string[];
  extraFeatures: string;
  isLoan: boolean;
  loanCompany: string;
  loanBalance: string;
  interiorDamage: string[];
  disclosures: string[];
  numberOfTires: string;
  keys: string;
  tiresReplaced: string;
  tiresKind: string;
  mechanicalIssuesFound: boolean;
  mechanicalIssues: string[];
  isDrivable: boolean;
  hasAccident: boolean;
  totalClaims: string;
  condition: string;
}
