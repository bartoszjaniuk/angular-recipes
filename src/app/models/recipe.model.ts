export class Recipe {
  constructor(name: string, desc: string, imgPath: string) {}
}
// what is better
export interface IRecipe {
  name: string;
  description: string;
  imagePath: string;
}
