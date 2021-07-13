import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IRecipe, Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe = {
    name: '',
    description: '',
    imagePath: '',
    ingredients: [],
  };

  @ViewChild('dropdownMenu') dropdownRef!: ElementRef;
  @ViewChild('toggleDropdown') toggleDropdown!: ElementRef;
  isActive: boolean = false;

  test!: ElementRef;
  onToggle() {
    this.isActive = !this.isActive;
    this.toggleDropdown.nativeElement.classList.toggle('show');
  }

  constructor(private recipeService: RecipeService) {}
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  ngOnInit(): void {}
}
