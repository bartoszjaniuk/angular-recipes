import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';
import { Recipe } from '../models/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged$ = new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) {}
  url: string =
    'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_curry_z_dynia.jpg';

  //   recipes: Recipe[] = [
  //   {
  //     id: 1,
  //     name: 'carbonara',
  //     description: 'forza italia',
  //     imagePath: this.url,
  //     ingredients: [
  //       new Ingredient('meat', '10', '🍖'),
  //       new Ingredient('brocoli', '5', '🥒'),
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'bolonieze',
  //     description: 'forza rome',
  //     imagePath: this.url,
  //     ingredients: [
  //       new Ingredient('meat', '10', '🍖'),
  //       new Ingredient('pomidor', '5', '🍅'),
  //     ],
  //   },
  // ];
  private recipes: Recipe[] = [];
  getRecipes() {
    return [...this.recipes];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged$.next([...this.recipes]);
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    const recipe = this.recipes.find((r) => r.id === id);
    return recipe!;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged$.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged$.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    // this.recipes.slice(index, 1);
    const filteredRecipes = this.recipes.filter((r) => r.id !== index);
    this.recipesChanged$.next([...filteredRecipes]);
    console.log(index);
    console.log([...filteredRecipes]);
  }
}
