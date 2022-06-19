import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from './shared/navigation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit, OnDestroy {
  openNav: boolean = false;
  toggleState: boolean = false;
  isSmallScreen: boolean;
  navState: string = 'closed';
  navigationSubscription: Subscription;

  constructor(private navService: NavigationService, breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    this.navigationSubscription = this.navService.toogleMainState.subscribe((toogleState => {
      this.toggleState = toogleState;
    }))
  }

  onToggle() {
    this.navService.onToogleSubNav(false)
  }

  onSelectedNav(selectedNav: any) {
    console.log(selectedNav)
    this.navState = 'open';
  }
  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe()
    
    
  }
}
