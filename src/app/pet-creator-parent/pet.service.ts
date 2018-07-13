import { Injectable } from '@angular/core';
import { Pet } from './pet.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PetService {

  petsDisplay = new Subject<Pet[]>();
  pets: Pet[] = []
  constructor() { }

  getPets() {
    return this.pets.slice();
  }

  dogAdded(pet: Pet) {
    this.pets.push(pet);
    this.petsDisplay.next(this.pets.slice());
  }

  catAdded(pet: Pet) {
    this.pets.push(pet);
    this.petsDisplay.next(this.pets.slice());
  }

}
