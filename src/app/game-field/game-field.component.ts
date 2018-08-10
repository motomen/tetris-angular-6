import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.styl']
})
export class GameFieldComponent implements OnInit {
  field: Array<Array<number>>;
  constructor() {
  }

  ngOnInit() {
    let emptyRow: Array<number> = this.fillArray(0, 21);
    this.field = this.fillArray(emptyRow);
  }

  fillArray(defaultValue: any = 0, arraySize: number = 41) {
    let array: Array<any> = [];
    let index = 0;
    while (index < arraySize) {
      array.push(defaultValue);
      index++;
    }
    return array;
  }
}
