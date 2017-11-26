import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  score:number=0;
  first: number = 0;
  second: number = 0;
  firstc: string;
  secondc: string;
  colors: Array<string> = [];
  game: Array<string>;
  constructor(public snackbar: MatSnackBar) { }
  ngOnInit() { this.newGame(); }
  newGame() {
    this.firstc = '';
    this.secondc = '';
    this.first = this.getRandomNumber();
    while (this.first == this.second) {
      this.second = this.getRandomNumber();
    }
    console.log('first=' + this.first + 'second=' + this.second);
    this.colors[this.first] = this.colors[this.second] = this.getRandomColor();
    for (let i = 0; i < 9; i++) {
      if ((i != this.first) && (i != this.second)) {
        this.colors[i] = this.getRandomColor();
      }
    }
    this.game = this.colors;
    //   setTimeout(()=>{    
    //     this.colors=['#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000','#FF0000'];
    //  },3000);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  getRandomNumber() {
    var num = Math.floor(Math.random() * 9);
    return num;
  }
  Plays(i) {
    if (this.firstc == '') {
      this.firstc = this.game[i];
    } else {
      if (this.firstc == this.game[i]) {
        this.snackbar.open('Your Score:'+this.score, 'Undo', {
          duration: 3000
        });
        this.score=this.score+1;
      }
      this.newGame();
    }
  }
}
