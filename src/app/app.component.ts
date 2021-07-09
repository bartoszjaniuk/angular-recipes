import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  fakeNavigation = [{ url: 'recipes' }, { url: 'shoppingList' }];
  currentURL: string = '';

  setCurrentPage(address: string) {
    this.currentURL = address;
  }

  constructor() {}

  ngOnInit(): void {
    this.currentURL = 'recipes';
    console.log(this.currentURL);
  }
}
