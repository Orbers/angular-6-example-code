import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PetCreatorComponent } from './pet-creator/pet-creator.component';
import { PetCockpitComponent } from './pet-cockpit/pet-cockpit.component';
import { PetDisplayComponent } from './pet-display/pet-display.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule    
  ],
  declarations: [
    PetCreatorComponent,
    PetCockpitComponent,
    PetDisplayComponent
  ],
  exports: [
    PetCreatorComponent,
    PetCockpitComponent,
    PetDisplayComponent
  ],
})
export class PetCreatorModule { }
