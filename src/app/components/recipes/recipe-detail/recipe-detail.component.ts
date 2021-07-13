import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IRecipe, Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  @ViewChild('dropdownMenu') dropdownRef!: ElementRef;
  @ViewChild('toggleDropdown') toggleDropdown!: ElementRef;
  isActive: boolean = false;
  recipe!: Recipe;

  onToggle() {
    this.isActive = !this.isActive;
    this.toggleDropdown.nativeElement.classList.toggle('show');
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  // onAddToShoppingList() {
  //   this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  // }

  ngOnInit(): void {
    this.route.params.subscribe((queryParams: Params) => {
      const { id } = queryParams;
      this.recipe = this.recipeService.getRecipe(+id);
      console.log(this.recipe);
    });
  }

  navigateToEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
