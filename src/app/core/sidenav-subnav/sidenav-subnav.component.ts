import { Component, Input, OnInit } from '@angular/core';
import { Navigation } from '../../shared/models/navigation.model';
import { NavigationService } from '../../shared/navigation.service';


@Component({
  selector: 'app-sidenav-subnav',
  templateUrl: './sidenav-subnav.component.html',
  styleUrls: ['./sidenav-subnav.component.scss']
})
export class SidenavSubnavComponent implements OnInit {
  @Input() selectedSubNav: string = '';


  selectedNav: Navigation | any;


  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.selectedNav = this.navService.getNavigationChildren(this.selectedSubNav);
  }


}
