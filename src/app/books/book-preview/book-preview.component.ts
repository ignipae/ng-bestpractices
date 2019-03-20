import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({selector: 'app-book-preview', templateUrl: './book-preview.component.html', styleUrls: ['./book-preview.component.scss']})
export class BookPreviewComponent implements OnInit {
  @Input()book;
  @Output()bookselected = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  selectThisBook() {
    this
      .bookselected
      .emit(this.book);
  }

}
