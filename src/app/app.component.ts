import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';
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
  routerSubscription: Subscription;
  height: number;
  toggleBackButton: boolean = true;
  constructor(
    private navService: NavigationService,
    private breakpointObserver: BreakpointObserver,
    public router: Router
  ) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    this.routerSubscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationStart),
        map((event) => event as NavigationStart), // appease typescript
        filter((event) => event.url !== '/')
      )
      .subscribe((event) => {
        this.toggleBackButton = false;
      });

    this.navigationSubscription = this.navService.toogleMainState.subscribe(
      (toogleState) => {
        this.toggleState = toogleState;
      }
    );
    this.height = window.innerHeight;
  }

  onToggle() {
    this.navService.onToogleSubNav(false);
  }
  onNavigateHome() {
    this.router.navigate(['/']);
    this.toggleBackButton = true;
  }
  onSelectedNav(selectedNav: any) {
    this.navState = 'open';
  }
  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
