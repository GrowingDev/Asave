import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DevDialogComponent } from '../dev-dialog/dev-dialog.component';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(DevDialogComponent);
  }
}


