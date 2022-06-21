import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Breakpoints } from 'src/app/shared/constants/breakpoints.constants';
import { HomeElement } from '../models/homeElement.model';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit,OnDestroy {
  expectedCols: number = 2;
  isSmallScreen: boolean;
  isMediumScreen: boolean;


  services: HomeElement[] = [
    { title: 'revier streife', route: '', imgPath: 'revierstreife' },
    { title: 'objekt schutz', route: '', imgPath: 'objektschutz' },
    { title: 'portier dienst', route: '', imgPath: 'portierdienst' },
    { title: 'veranstaltungs schutz', route: '', imgPath: 'veranstaltungsschutz' },
    { title: 'berufs detektei', route: '', imgPath: 'berufsdetektei' },
    { title: 'personen schutz', route: '', imgPath: 'personenschutz' },
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
          if (breakpointState.breakpoints[Breakpoints.Md]) {
            this.expectedCols = 2
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.breakpointObservable.unsubscribe()
  }

}
