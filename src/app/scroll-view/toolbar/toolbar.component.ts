import { Component, OnInit, ViewChild } from '@angular/core';
import { ScrollViewService } from '../scroll-view.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {


  @ViewChild('toolbar') toolbar;

  constructor(private scrollViewService: ScrollViewService) { }

  ngOnInit() {
    console.log("toolbarComp ngOnInit Top" ,this.toolbar.nativeElement)
    this.scrollViewService.setToolbar(this.toolbar.nativeElement); 
  }

  scrollTop() {
    this.scrollViewService.top.scrollIntoView(true);
  }

  scrollMiddle() {
    this.scrollViewService.middle.scrollIntoView(true);
  }

  scrollBottom() {
    this.scrollViewService.bottom.scrollIntoView(true);
  }

}
