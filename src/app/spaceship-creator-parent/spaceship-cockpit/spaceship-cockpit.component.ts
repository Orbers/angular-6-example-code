import { Component, OnInit} from '@angular/core';
import { SpaceshipService } from '../spaceship.service';

@Component({
  selector: 'app-spaceship-cockpit',
  templateUrl: './spaceship-cockpit.component.html',
  styleUrls: ['./spaceship-cockpit.component.css']
})
export class SpaceshipCockpitComponent implements OnInit {

  name = '';
  
  constructor( private spaceshipService: SpaceshipService) { }

  ngOnInit() {
  }

  addShuttle() {
    this.spaceshipService.shuttleAdded(this.name, 'shuttle');
    this.spaceshipService.newSpaceshipNotification.emit(this.name);
  }

  addRocket() {
    this.spaceshipService.rocketAdded(this.name, 'rocket');
    this.spaceshipService.newSpaceshipNotification.emit(this.name);
  }

}
