import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  img: string;
}
@Component({
  selector: 'app-photo-header',
  templateUrl: './photo-header.component.html',
  styleUrls: ['./photo-header.component.css']
})
export class PhotoHeaderComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', img: '../../assets/images/header.png', cols: 3, rows: 1, color: '#F0F1F5' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
