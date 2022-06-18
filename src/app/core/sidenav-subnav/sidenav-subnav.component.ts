import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Navigation } from 'src/app/shared/models/navigation.model';
import { NavigationService } from '../../shared/navigation.service';


@Component({
  selector: 'app-sidenav-subnav',
  templateUrl: './sidenav-subnav.component.html',
  styleUrls: ['./sidenav-subnav.component.scss']
})
export class SidenavSubnavComponent implements OnInit, OnDestroy {
  navigation: Navigation;
  toggle: boolean = false;
  private navChangeSub: Subscription;
  private toogleChangeSub: Subscription;
  @Output() sidenav = new EventEmitter<boolean>();
  constructor(private navService: NavigationService) { }

  ngOnInit() {
     this.navChangeSub = this.navService.selectedNav
     .subscribe((navigation) => {
      this.navigation = navigation;
     })
     this.toogleChangeSub = this.navService.toogleState
     .subscribe((toogleState => {
      this.toggle = toogleState;
     }))
  }

  onSelectNav(route: string) {
    console.log(route)
    this.sidenav.emit(false)

  }

  ngOnDestroy(): void {
    this.navChangeSub.unsubscribe();
  }

}
