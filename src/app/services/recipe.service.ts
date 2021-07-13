import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  url: string =
    'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_curry_z_dynia.jpg';
  recipes: Recipe[] = [
    {
      name: 'carbonara',
      description: 'forza italia',
      imagePath: this.url,
      ingredients: [
        new Ingredient('meat', '10', '🍖'),
        new Ingredient('brocoli', '5', '🥒'),
      ],
    },
    {
      name: 'bolonieze',
      description: 'forza rome',
      imagePath: this.url,
      ingredients: [
        new Ingredient('meat', '10', '🍖'),
        new Ingredient('pomidor', '5', '🍅'),
      ],
    },
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
