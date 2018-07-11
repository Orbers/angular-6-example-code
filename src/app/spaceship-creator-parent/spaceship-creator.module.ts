import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpaceshipCockpitComponent } from './spaceship-cockpit/spaceship-cockpit.component';
import { SpaceshipCreatorComponent } from './spaceship-creator/spaceship-creator.component';
import { SpaceshipDisplayComponent } from './spaceship-display/spaceship-display.component';




@NgModule({
  declarations: [
    SpaceshipCockpitComponent,
    SpaceshipCreatorComponent,
    SpaceshipDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SpaceshipCockpitComponent,
    SpaceshipCreatorComponent,
    SpaceshipDisplayComponent
  ],
  providers: [],
  
})
export class ServerCreatorModule { }