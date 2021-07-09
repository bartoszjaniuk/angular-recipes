import { Component, OnInit } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  url: string =
    'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kurczak_curry_z_dynia.jpg';
  recipes: Recipe[] = [new Recipe('pizza', 'test desc', this.url)];
  recipesI: IRecipe[] = [
    { name: 'carbonara', description: 'forza italia', imagePath: this.url },
    { name: 'bolonieze', description: 'forza rome', imagePath: this.url },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log('recipes: ', typeof this.recipes);
    console.log('recipesI: ', typeof this.recipesI);
  }
}
