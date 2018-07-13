import { Injectable } from '@angular/core';

@Injectable()
export class ScrollViewService {

  top: HTMLElement;
  middle: HTMLElement;
  bottom: HTMLElement;
  toolbar: HTMLElement;

  constructor() { }

  setToolbar(el) {
    this.toolbar = el;
    // console.log(this.toolbar);
  }

  setTop(el) {
    this.top = el;
    // console.log(this.top);
  }

  setMiddle(el) {
    this.middle = el;
    // console.log(this.middle);
  }

  setBottom(el) {
    this.bottom = el;
    // console.log(this.bottom);
  }
}
