import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  name = '';
  content = '';

  @Output() newServer: EventEmitter<Server> = new EventEmitter();
  @Output() newBlueprint: EventEmitter<Server> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.newServer.emit(
      new Server(this.name, this.content, 'server')
    )
  }

  addBlueprint() {
    this.newServer.emit(
      new Server(this.name, this.content, 'blueprint')
    )
  }

}
