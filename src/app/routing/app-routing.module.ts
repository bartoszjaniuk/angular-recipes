import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { RecipeAddedComponent } from '../components/recipes/recipe-added/recipe-added.component';
import { RecipeDetailComponent } from '../components/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../components/recipes/recipe-edit/recipe-edit.component';
import { RecipePlaceholderComponent } from '../components/recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipesComponent } from '../components/recipes/recipes.component';
import { ShoppingListEditComponent } from '../components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from '../components/shopping-list/shopping-list.component';
import { RecipeResolverService } from '../resolvers/recipe.resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'shopping-list/edit', component: ShoppingListEditComponent },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipePlaceholderComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'auth', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
