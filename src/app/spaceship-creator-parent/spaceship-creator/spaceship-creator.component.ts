import { Component, OnInit } from '@angular/core';
import { Spaceship } from '../spaceship.model';
import { SpaceshipService } from '../spaceship.service';

@Component({
  selector: 'app-spaceship-creator',
  templateUrl: './spaceship-creator.component.html',
  styleUrls: ['./spaceship-creator.component.css']
})
export class SpaceshipCreatorComponent implements OnInit {

  spaceships: Spaceship[] = []
  
  constructor(private spaceshipService: SpaceshipService) {
    this.spaceshipService.newSpaceshipNotification.subscribe(
      (name: string) => alert('new spaceship name ' + name)
    );
   }

  ngOnInit() {
    this.spaceships = this.spaceshipService.getSpaceships();
  }

}
