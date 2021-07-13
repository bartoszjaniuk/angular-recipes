import { EventEmitter, Injectable } from '@angular/core';
import { IIngredient, Ingredient } from '../models/ingredient.model';

Injectable();
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<IIngredient[]>();
  ingredients: IIngredient[] = [
    { name: 'Bacon', amount: 5, fakeIcon: '🥓' },
    { name: 'Rucola', amount: 2, fakeIcon: '🥗' },
    { name: 'Avocado', amount: 10, fakeIcon: '🥑' },
    { name: 'Chicken', amount: 10, fakeIcon: '🍖' },
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: IIngredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(name: string) {
    const ingredientToDelete = this.ingredients.find(
      (ing) => ing.name === name
    );
    console.log('TO DELETE', ingredientToDelete);
    const test = this.ingredients.filter(
      (ing) => ing.name !== ingredientToDelete?.name
    );
    this.ingredients = [...test];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
