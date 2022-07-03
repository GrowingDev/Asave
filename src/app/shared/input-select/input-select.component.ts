import { Component, Input, OnInit } from '@angular/core';
import { InputSelectOption } from '../models/input-select-option.model';


@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
 @Input() options: InputSelectOption[];
 @Input() label: string;
  constructor() { }

  ngOnInit(): void {
  }

}
