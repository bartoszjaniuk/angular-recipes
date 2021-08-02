import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IIngredient, Ingredient } from '../models/ingredient.model';

Injectable();
export class ShoppingListService {
  // ingredientsChanged = new EventEmitter<IIngredient[]>();
  ingredientsChanged = new Subject<IIngredient[]>();
  startedEditing = new Subject<number>();

  ingredients: IIngredient[] = [
    { name: 'Bacon', amount: 5, fakeIcon: '🥓' },
    { name: 'Rucola', amount: 2, fakeIcon: '🥗' },
    { name: 'Avocado', amount: 10, fakeIcon: '🥑' },
    { name: 'Chicken', amount: 10, fakeIcon: '🍖' },
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIntedientById(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: IIngredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next([...this.ingredients]);
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
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
