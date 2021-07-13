import { Component, OnInit } from '@angular/core';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent implements OnInit {
  fakeNavigation = [{ url: 'Recipes' }, { url: 'ShoppingList' }];
  currentURL: string = 'Recipes';

  setCurrentPage(address: string) {
    this.currentURL = address;
  }

  constructor() {}

  ngOnInit(): void {}
}
