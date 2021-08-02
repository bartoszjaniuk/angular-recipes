import { BasicHighlightDirective } from './directives/basic-highlight/basic-highllight.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { DropdownDirective } from './directives/dropdown/dropdown.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';
import { AppRoutingModule } from './routing/app-routing.module';
import { RecipePlaceholderComponent } from './components/recipes/recipe-placeholder/recipe-placeholder.component';
import { RecipeAddedComponent } from './components/recipes/recipe-added/recipe-added.component';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropdownDirective,
    RecipePlaceholderComponent,
    RecipeAddedComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
