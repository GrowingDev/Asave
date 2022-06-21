import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Breakpoints } from 'src/app/shared/constants/breakpoints.constants';
import { HomeElement } from '../models/homeElement.model';



@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit,OnDestroy {
  expectedCols: number = 2;
  isSmallScreen: boolean;
  isMediumScreen: boolean;


  actions: HomeElement[] = [
    { title: 'jetzt anfragen', route: '', imgPath: 'jetztanfragen' },
    { title: 'jetzt bewerben', route: '', imgPath: 'jetztbewerben' },

  ];

  breakpointObservable: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isMediumScreen = this.breakpointObserver.isMatched('(max-width: 959px)');
  }
  ngOnInit(): void {
    this.breakpointObservable = this.breakpointObserver.observe([Breakpoints.Sm, Breakpoints.Xs, Breakpoints.Md])
      .subscribe(breakpointState => {
        if (breakpointState.matches) {
          if (breakpointState.breakpoints[Breakpoints.Xs]) {
            this.expectedCols = 6
          }
          if (breakpointState.breakpoints[Breakpoints.Sm]) {
            this.expectedCols = 3;
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.breakpointObservable.unsubscribe()
  }

}
