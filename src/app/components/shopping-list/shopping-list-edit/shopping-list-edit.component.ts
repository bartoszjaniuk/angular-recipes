import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<IIngredient>();
  ingredient: IIngredient = {
    name: '',
    amount: 0,
    fakeIcon: '🆕',
  };

  newIngredient: IIngredient = {
    name: '',
    amount: 0,
    fakeIcon: '🆕',
  };

  setIngredient(name: string, amount: any, fakeIcon: string = '🆕') {
    return (this.newIngredient = {
      name,
      amount,
      fakeIcon,
    });
  }

  handleChangeName(event: Event) {
    const e = event.target as HTMLInputElement;
    this.ingredient.name = e.value;
  }

  handleChangeAmount(event: Event) {
    const e = event.target as HTMLInputElement;
    this.ingredient.amount = e.value;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    this.setIngredient(this.ingredient.name, this.ingredient.amount);
    this.ingredientCreated.emit(this.newIngredient);
  }

  constructor() {}

  ngOnInit(): void {}
}
