import { Component, OnInit } from '@angular/core';
import { Server } from '../server.model';

@Component({
  selector: 'app-server-creator',
  templateUrl: './server-creator.component.html',
  styleUrls: ['./server-creator.component.css']
})
export class ServerCreatorComponent implements OnInit {

  servers: Server[] = [];


  constructor() { }

  ngOnInit() {
  }

  serverAdded(server: Server) {
    this.servers.push(server);
  }

  blueprintAdded(blueprint: Server) {
    this.servers.push(blueprint);
  }


}
