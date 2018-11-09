import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 1, rows: 1, color: '#F0F1F5' },
    { text: 'Two', cols: 1, rows: 1, color: '#F0F1F5' },
    { text: 'Three', cols: 1, rows: 1, color: '#F0F1F5'},
  ];
  constructor() {}

  ngOnInit() {}
}
