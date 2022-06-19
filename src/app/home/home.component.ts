import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    { text: 'Revierstreife', cols: 2, rows: 1, color: 'lightblue' },
    { text: 'Objektschutz', cols: 2, rows: 1, color: 'lightgreen' },
    { text: 'Portierdienst', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Veranstaltungsschutz', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Berufsdetektei', cols: 2, rows: 1, color: 'lightpink' },
    { text: 'Personenschutz', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
