import { Component, OnInit, OnDestroy } from '@angular/core';


import 'rxjs/Rx';
import { PetService } from '../pet.service';
import { Pet } from '../pet.model';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-pet-creator',
  templateUrl: './pet-creator.component.html',
  styleUrls: ['./pet-creator.component.css']
})
export class PetCreatorComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  pets: Pet[] = [];
  constructor(private petService: PetService) { }

  ngOnInit() {
    this.pets = this.petService.getPets();
    this.subscription = this.petService.petsDisplay
      .subscribe(
        (pets: Pet[]) => {
          this.pets = pets;
        }
      )
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

