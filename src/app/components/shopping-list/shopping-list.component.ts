import { Component, OnInit } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: IIngredient[];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: IIngredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  deleteIng(name: string) {
    this.shoppingListService.deleteIngredient(name);
  }
}
