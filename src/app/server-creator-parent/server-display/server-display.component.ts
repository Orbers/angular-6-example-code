import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../server.model';


@Component({
  selector: 'app-server-display',
  templateUrl: './server-display.component.html',
  styleUrls: ['./server-display.component.css']
})
export class ServerDisplayComponent implements OnInit {
  @Input() server: Server;

  constructor() { }

  ngOnInit() {
  }

}
