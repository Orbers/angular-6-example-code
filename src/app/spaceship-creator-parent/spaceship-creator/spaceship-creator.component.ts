import { Component, OnInit } from '@angular/core';
import { Spaceship } from '../spaceship.model';

@Component({
  selector: 'app-spaceship-creator',
  templateUrl: './spaceship-creator.component.html',
  styleUrls: ['./spaceship-creator.component.css']
})
export class SpaceshipCreatorComponent implements OnInit {

  spaceships: Spaceship[] = [];

  
  shuttleAdded(shuttle: Spaceship) {
    this.spaceships.push(shuttle);
    console.log(this.spaceships);
  }

  rocketAdded(rocket: Spaceship) {
    this.spaceships.push(rocket);
    console.log(this.spaceships);
  }

  constructor() { }

  ngOnInit() {
  }

}
