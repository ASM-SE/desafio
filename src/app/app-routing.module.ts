import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

    
import { PreGameComponent } from './components/pre-game/pre-game.component';
import { GameComponent } from './components/game/game.component';
import { ScoreComponent } from './components/score/score.component';
    
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PreGameComponent},
    { path: 'game', component: GameComponent},
    { path: 'scores', component: ScoreComponent}
];
    
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}