import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from './recipe.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private url: string =
    'https://angular-recipes-4b204-default-rtdb.firebaseio.com/recipes.json';
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put<Recipe[]>(this.url, recipes)
      .pipe(
        map((recipes) => {
          return recipes.map((recipe: Recipe) => {
            const r = {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
            console.log(r);
            return r;
          });
        })
      )
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.url).pipe(
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      })
    );
  }
}
