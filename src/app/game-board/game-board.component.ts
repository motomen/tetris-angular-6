import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.styl']
})
export class GameBoardComponent implements OnInit {
  board: number[][];
  constructor() {
  }

  ngOnInit() {
    let emptyRow: number[] = this.fillArray(0, 21);
    this.board = this.fillArray(emptyRow);
  }

  fillArray(defaultValue: any = 0, arraySize: number = 41): any[] {
    let array: any[] = [];
    let index = 0;
    while (index < arraySize) {
      array.push(defaultValue);
      index++;
    }
    return array;
  }
}
