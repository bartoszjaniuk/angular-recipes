import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: IIngredient[] = [
    { name: 'Bacon', amount: 5, fakeIcon: '🥓' },
    { name: 'Rucola', amount: 2, fakeIcon: '🥗' },
    { name: 'Avocado', amount: 10, fakeIcon: '🥑' },
    { name: 'Chicken', amount: 10, fakeIcon: '🍖' },
  ];

  addIngredient(newIngredient: IIngredient) {
    this.ingredients.push(newIngredient);
  }

  constructor() {}

  ngOnInit(): void {}
}
