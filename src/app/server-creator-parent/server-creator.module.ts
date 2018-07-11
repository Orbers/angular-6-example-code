import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerCockpitComponent } from './server-cockpit/server-cockpit.component';
import { ServerCreatorComponent } from './server-creator/server-creator.component';
import { ServerDisplayComponent } from './server-display/server-display.component';



@NgModule({
  declarations: [
    ServerCockpitComponent,
    ServerCreatorComponent,
    ServerDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ServerCockpitComponent,
    ServerCreatorComponent,
    ServerDisplayComponent
  ],
  providers: [],
  
})
export class ServerCreatorModule { }