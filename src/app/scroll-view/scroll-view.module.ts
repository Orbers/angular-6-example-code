import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollViewComponent } from './scroll-view.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ScrollViewContentComponent } from './scroll-view-content/scroll-view-content.component';

@NgModule({
  declarations: [
    ScrollViewComponent,
    ToolbarComponent,
    ScrollViewContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollViewComponent,
    ToolbarComponent
  ]
})
export class ScrollViewModule { }
