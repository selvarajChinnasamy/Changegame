import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule,MatSnackBarModule,MatChipsModule,MatDialogModule} from '@angular/material';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    MatGridListModule,
    MatSnackBarModule,
    MatChipsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
