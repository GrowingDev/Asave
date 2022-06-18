import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from './shared/navigation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  toggleState: boolean = false;
  navigationSubscription: Subscription;

  constructor(private navService: NavigationService) { }

  ngOnInit() {
    this.navigationSubscription = this.navService.toogleMainState.subscribe((toogleState => {
      this.toggleState = toogleState;
    }))
  }

  onToggle() {
    this.navService.onToogleMainNav(!this.toggleState)
  }

  onSelectedNav(selectedNav: any) {
    console.log(selectedNav)
  }

}
