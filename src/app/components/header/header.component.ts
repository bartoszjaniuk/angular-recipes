import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() handleCurrentPage = new EventEmitter<string>();
  pageURL: string = '';

  setPageURL(event: Event) {
    let e = event.target as HTMLInputElement;
    this.pageURL = e.textContent!;
    this.handleCurrentPage.emit(this.pageURL);
  }

  constructor() {}

  ngOnInit(): void {}
}
