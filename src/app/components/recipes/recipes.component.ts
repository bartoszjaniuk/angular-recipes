import { IRecipe, Recipe } from './../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
