import { Injectable, EventEmitter } from '@angular/core';
import { Spaceship } from './spaceship.model';

@Injectable()
export class SpaceshipService {

  spaceships: Spaceship[] = [];

  newSpaceshipNotification = new EventEmitter<string>();

  
  shuttleAdded(name, type) {
    this.spaceships.push(new Spaceship(name, type));
  }

  rocketAdded(name, type) {
    this.spaceships.push(new Spaceship(name, type));
  }

  getSpaceships() {
    return this.spaceships
  }

  constructor() { }

}
