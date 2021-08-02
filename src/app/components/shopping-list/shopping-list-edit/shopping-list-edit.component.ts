import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IIngredient, Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  editMode: boolean = false;
  editedItemIndex!: number;
  editedItem!: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}
  shoppingListForm!: FormGroup;
  ingredient: IIngredient = {
    name: '',
    amount: 0,
    fakeIcon: '🆕',
  };

  ngOnInit(): void {
    this.shoppingListForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      amount: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[1-9]+[0-9]*$'),
      ]),
      icon: new FormControl(null, [Validators.required]),
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIntedientById(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          icon: this.editedItem.fakeIcon,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setIngredient(name: string, amount: any, fakeIcon: string = '🆕') {
    return (this.ingredient = {
      name,
      amount,
      fakeIcon,
    });
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.setIngredient(
      this.shoppingListForm.value.name,
      this.shoppingListForm.value.amount,
      this.shoppingListForm.value.icon
    );
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        this.ingredient
      );
      this.editMode = false;
    } else {
      this.shoppingListService.addIngredient(this.ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.shoppingListForm.reset();
  }
}
