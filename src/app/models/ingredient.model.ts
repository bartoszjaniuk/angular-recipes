export interface IIngredient {
  name: string;
  amount: string | number;
  fakeIcon: string;
}

export class Ingredient {
  name: string;
  amount: string;
  fakeIcon: string;

  constructor(name: string, amount: string, fakeIcon: string) {
    (this.name = name), (this.amount = amount), (this.fakeIcon = fakeIcon);
  }
}
