import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimerGameComponent } from './timer-game-parent/timer-game/timer-game.component';
import { TimerGameDashboardComponent } from './timer-game-parent/timer-game-dashboard/timer-game-dashboard.component';
import { ServerCreatorModule } from './server-creator-parent/server-creator.module';
import { SpaceshipCreatorModule } from './spaceship-creator-parent/spaceship-creator.module';
import { SpaceshipService } from './spaceship-creator-parent/spaceship.service';
import { PetCreatorModule } from './pet-creator-parent/pet-creator.module';
import { PetService } from './pet-creator-parent/pet.service';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ScrollViewModule } from './scroll-view/scroll-view.module';
import { ScrollViewService } from './scroll-view/scroll-view.service';


@NgModule({
  declarations: [
    AppComponent,
    TimerGameComponent,
    TimerGameDashboardComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServerCreatorModule,
    SpaceshipCreatorModule,
    PetCreatorModule,
    ScrollViewModule
  ],
  providers: [SpaceshipService, PetService, ScrollViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
