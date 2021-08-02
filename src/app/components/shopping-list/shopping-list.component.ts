import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IIngredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: IIngredient[];
  private isChangeSubscription!: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.isChangeSubscription =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: IIngredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy() {
    this.isChangeSubscription.unsubscribe();
  }

  deleteIng(name: string) {
    this.shoppingListService.deleteIngredient(name);
  }
  onEditIngredient(id: number) {
    this.shoppingListService.startedEditing.next(id);
  }
}
