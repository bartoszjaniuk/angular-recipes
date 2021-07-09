import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: IRecipe = { name: '', description: '', imagePath: '' };

  // Można ustawić alias dla @Input elementu
  // @Input('customRecipeHeHe') recipe: IRecipe = { name: '', description: '', imagePath: '' };

  constructor() {}

  ngOnInit(): void {}
}
