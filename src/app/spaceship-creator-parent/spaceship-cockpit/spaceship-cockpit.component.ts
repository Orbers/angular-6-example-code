import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Spaceship } from '../spaceship.model';

@Component({
  selector: 'app-spaceship-cockpit',
  templateUrl: './spaceship-cockpit.component.html',
  styleUrls: ['./spaceship-cockpit.component.css']
})
export class SpaceshipCockpitComponent implements OnInit {

  name = '';

  @Output() newShuttle: EventEmitter<Spaceship> = new EventEmitter();
  @Output() newRocket: EventEmitter<Spaceship> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addShuttle() {
    this.newShuttle.emit(
      new Spaceship(this.name, 'shuttle')
    )
  }

  addRocket() {
    this.newRocket.emit(
      new Spaceship(this.name, 'rocket')
    )
  }

}
