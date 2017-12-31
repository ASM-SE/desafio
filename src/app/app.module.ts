import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { DialogsModule } from './shared/services/dialog/dialogs.module';

import { PlayerComponent } from './components/player/player.component';
import { PreGameComponent } from './components/pre-game/pre-game.component';
import { PostGameComponent } from './components/post-game/post-game.component';
import { GameComponent } from './components/game/game.component';
import { DamageButtonComponent } from './components/damage-button/damage-button.component';
import { FlowControlButtonComponent } from './components/flow-control-button/flow-control-button.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PreGameComponent,
    PostGameComponent,
    GameComponent,
    DamageButtonComponent,
    FlowControlButtonComponent,
    ScoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DialogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
