import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-game-dashboard',
  templateUrl: './timer-game-dashboard.component.html',
  styleUrls: ['./timer-game-dashboard.component.css']
})
export class TimerGameDashboardComponent {

  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
