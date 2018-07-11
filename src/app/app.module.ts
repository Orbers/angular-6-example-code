import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimerGameComponent } from './timer-game-parent/timer-game/timer-game.component';
import { TimerGameDashboardComponent } from './timer-game-parent/timer-game-dashboard/timer-game-dashboard.component';
import { ServerCreatorModule } from './server-creator-parent/server-creator.module';
import { SpaceshipCockpitComponent } from './spaceship-creator-parent/spaceship-cockpit/spaceship-cockpit.component';
import { SpaceshipCreatorComponent } from './spaceship-creator-parent/spaceship-creator/spaceship-creator.component';
import { SpaceshipDisplayComponent } from './spaceship-creator-parent/spaceship-display/spaceship-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerGameComponent,
    TimerGameDashboardComponent,
    SpaceshipCockpitComponent,
    SpaceshipCreatorComponent,
    SpaceshipDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServerCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
