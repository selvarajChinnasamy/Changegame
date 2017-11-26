import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

export const router: Routes = [
    { path: '', redirectTo: 'game', pathMatch: 'full' },
    { path: 'game', component: GameComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);