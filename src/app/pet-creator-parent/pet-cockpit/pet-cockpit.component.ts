import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-cockpit',
  templateUrl: './pet-cockpit.component.html',
  styleUrls: ['./pet-cockpit.component.css']
})
export class PetCockpitComponent implements OnInit {

  name = '';

  constructor(private petService: PetService) { }

  ngOnInit() {

  }

  addDog() {
    this.petService.dogAdded(new Pet(this.name, 'dog'));
  }

  addCat() {
    this.petService.dogAdded(new Pet(this.name, 'cat'));
  }

}
