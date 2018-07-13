import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollViewService } from '../scroll-view.service';

@Component({
  selector: 'app-scroll-view-content',
  templateUrl: './scroll-view-content.component.html',
  styleUrls: ['./scroll-view-content.component.css']
})
export class ScrollViewContentComponent implements OnInit {

  @ViewChild('top') top; 
  @ViewChild('middle') middle;
  @ViewChild('bottom') bottom;

  constructor( private scrollViewService: ScrollViewService) { }

  ngOnInit() {
    console.log("svc ngOnInit Top" ,this.top.nativeElement);
    this.scrollViewService.setTop(this.top.nativeElement);
    this.scrollViewService.setMiddle(this.middle.nativeElement);
    this.scrollViewService.setBottom(this.bottom.nativeElement);
  }

//   scrollBottom(bottom2) {
//     console.log(this.bottom.nativeElement);
//     console.log(bottom2);
//     // this.bottom.scrollIntoView(true);
// }

  scrollToToolbar() {
    this.scrollViewService.toolbar.scrollIntoView(true);
    // console.log(this.scrollViewService.toolbar);
    // console.log(this.scrollViewService.top);
  }

}
