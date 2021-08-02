import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { IIngredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  editMode: boolean = false;
  recipeId!: number;
  recipeEditForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((queryParams: Params) => {
      this.recipeId = +queryParams['id'];
      this.editMode = queryParams['id'] != null;
      this.initForm();
    });
  }

  getControls() {
    return (<FormArray>this.recipeEditForm.get('ingredients')).controls;
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImagePath = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.recipeId);
      const {
        name,
        description,
        imagePath,
        ingredients,
      }: {
        name: string;
        description: string;
        imagePath: string;
        ingredients: IIngredient[];
      } = recipe;

      recipeName = name;
      recipeDescription = description;
      recipeImagePath = imagePath;
      if (ingredients) {
        ingredients.forEach((ing: IIngredient) => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ing.name, [Validators.required]),
              amount: new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern('^[1-9]+[0-9]*$'),
              ]),
              fakeIcon: new FormControl(ing.fakeIcon),
            })
          );
        });
      }
    }

    this.recipeEditForm = new FormGroup({
      name: new FormControl(recipeName, [Validators.required]),
      description: new FormControl(recipeDescription, [Validators.required]),
      imagePath: new FormControl(recipeImagePath, [Validators.required]),
      ingredients: recipeIngredients,
    });
  }

  addIngredient() {
    (<FormArray>this.recipeEditForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[1-9]+[0-9]*$'),
        ]),
        fakeIcon: new FormControl(),
      })
    );
  }

  onSubmit() {
    const { name, description, imagePath, ingredients } =
      this.recipeEditForm.value;
    const rand = Math.random();
    const newRecipe = new Recipe(
      rand,
      name,
      description,
      imagePath,
      ingredients
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeId, this.recipeEditForm.value);
      alert('UPDATED!');
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
  }

  onDeleteIng(index: number) {
    (<FormArray>this.recipeEditForm.get('ingredients')).removeAt(index);
  }
}
