import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-game',
  templateUrl: './timer-game.component.html',
  styleUrls: ['./timer-game.component.css']
})
export class TimerGameComponent implements OnInit {

  count = 0;
  counts: any[] = [];
  timer;

  constructor() { } 

  ngOnInit() {  }

  beginGame() {
    this.timer = setInterval(() =>{
     this.timerDo()
    }, 1000) ;
  } 

  timerDo() {
    console.log(this.count);
    //console.log(this.counts);
    this.counts.push(this.count++);
  }

  stopGame() {
    clearInterval(this.timer);
    console.log('stopGame')
    this.count = 0;
    this.counts = [];
  }



}
