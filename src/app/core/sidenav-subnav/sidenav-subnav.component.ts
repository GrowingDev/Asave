import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Navigation } from '../../shared/models/navigation.model';
import { NavigationService } from '../../shared/navigation.service';


@Component({
  selector: 'app-sidenav-subnav',
  templateUrl: './sidenav-subnav.component.html',
  styleUrls: ['./sidenav-subnav.component.scss']
})
export class SidenavSubnavComponent implements OnInit {
  @Input() selectedSubNav: string = '';
  @Output() toggleSideNav = new EventEmitter<boolean>();

  selectedNav: Navigation | any;


  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.selectedNav = this.navService.getNavigationChildren(this.selectedSubNav);
  }
  onSelectNav(route: string){
    console.log(route)
    this.toggleSideNav.emit(false);
  }

}
