import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-v1';
  openSubNav: boolean = false;
  selectedSideNav: string = '';

  onSelectedNav(selectedNav: any){
    console.log(selectedNav)
    this.selectedSideNav = selectedNav
    this.openSubNav = true;

  }


}
