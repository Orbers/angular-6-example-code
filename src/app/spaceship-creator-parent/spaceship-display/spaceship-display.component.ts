import { Component, OnInit, Input } from '@angular/core';
import { Spaceship } from '../spaceship.model';

@Component({
  selector: 'app-spaceship-display',
  templateUrl: './spaceship-display.component.html',
  styleUrls: ['./spaceship-display.component.css']
})
export class SpaceshipDisplayComponent implements OnInit {

  @Input() spaceship: Spaceship;

  constructor() { }

  ngOnInit() {
  }

}
