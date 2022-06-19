import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationService } from '../../shared/navigation.service';
import { Navigation } from '../../shared/models/navigation.model';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navigation: Navigation[] = [];
  @Output() sidenav = new EventEmitter<boolean>();
  constructor(private navService: NavigationService) { }

  ngOnInit(): void {
    this.navigation = this.navService.getNavigation()
  }
  onSelectNav(index: number) {
    this.navService.onSelectNav(index)
  }
  onClose(){
    this.sidenav.emit(false)
  }
}