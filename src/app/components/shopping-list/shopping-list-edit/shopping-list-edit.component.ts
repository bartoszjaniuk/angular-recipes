import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IIngredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  // FORM INPUTS
  ingredientValue: string = '';
  ingredientAmount: string = '';

  ingredient: IIngredient = {
    name: '',
    amount: 0,
    fakeIcon: '🆕',
  };

  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;

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
    // this.setIngredient(this.ingredientValue, this.ingredientAmount);
    this.setIngredient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(this.ingredient);
    this.ingredientValue = 'LOL';
    this.ingredientAmount = '';
  }

  ngOnInit(): void {}
}
