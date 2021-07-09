import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  // DATA PASSED TO PARENT
  @Output() ingredientCreated = new EventEmitter<IIngredient>();

  // FORM INPUTS
  ingredientValue: string = '';
  ingredientAmount: string = '';

  ingredient: IIngredient = {
    name: '',
    amount: 0,
    fakeIcon: '🆕',
  };

  setIngredient(name: string, amount: any, fakeIcon: string = '🆕') {
    return (this.ingredient = {
      name,
      amount,
      fakeIcon,
    });
  }

  handleChangeName(event: Event) {
    const e = event.target as HTMLInputElement;
    this.ingredientValue = e.value;
  }

  handleChangeAmount(event: Event) {
    const e = event.target as HTMLInputElement;
    this.ingredientAmount = e.value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.setIngredient(this.ingredientValue, this.ingredientAmount);
    this.ingredientCreated.emit(this.ingredient);
  }

  constructor() {}

  ngOnInit(): void {}
}
