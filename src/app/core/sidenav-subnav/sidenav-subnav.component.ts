import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Navigation } from 'src/app/shared/models/navigation.model';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-sidenav-subnav',
  templateUrl: './sidenav-subnav.component.html',
  styleUrls: ['./sidenav-subnav.component.scss'],
  animations: [
    trigger('navState', [
      state('closed', style({
        transform: 'translateX(100%)'
      })),
      state('open', style({
        transform: 'translateX(0px)'
      })),
      transition('closed <=> open', [animate('0.4s cubic-bezier(0.25, 0.8, 0.25, 1)')]),
    ])
  ]

})
export class SidenavSubnavComponent implements OnInit, OnDestroy {
  @Output() sidenav = new EventEmitter<boolean>();
  isOpen: string;
  navigation: Navigation = { title: "" };
  isSmallScreen: boolean;
  toggle: boolean = false;


  private navChangeSub: Subscription;
  private toggleChangeSub: Subscription;
  private navigationSubscription: Subscription;


  constructor(private navService: NavigationService, breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
  }

  ngOnInit() {
    this.navChangeSub = this.navService.selectedNav
      .subscribe((navigation) => {
        this.navigation = navigation;
      })
    this.toggleChangeSub = this.navService.toogleState
      .subscribe((toogleState => {
        this.toggle = toogleState;
      }))
  }

  onClose() {
    this.sidenav.emit(false);
  }

  onBack() {
    this.navService.onToogleSubNav(false);
    this.isOpen = 'closed';
  }

  ngOnDestroy(): void {
    this.navChangeSub.unsubscribe();
    this.navigationSubscription.unsubscribe()
    this.toggleChangeSub.unsubscribe()
  }

}
