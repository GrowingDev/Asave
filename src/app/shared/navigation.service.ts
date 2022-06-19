import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Navigation } from './models/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  private navigations: Navigation[] = [
    {
      title: 'Unternehmen',
      children: [
        {
          title: 'Iso-Zertifizierung',
          route: '/certificate'
        },
        {
          title: 'Unternehmenssponsoring',
          route: '/sponsoring'
        },
        {
          title: 'Partner',
          route: '/partner'
        }
      ]
    },
    {
      title: 'Leistungen',
      children: [
        {
          title: 'Revierstreife',
          route: '/services/revierstreife'
        },
        {
          title: 'Objektschutz',
          route: '/services/objektschutz'
        },
        {
          title: 'Portierdienst',
          route: '/services/portierdienst'
        },
        {
          title: 'Veranstaltungsschutz',
          route: '/services/veranstaltungsschutz'
        },
        {
          title: 'Berufsdetektei',
          route: '/services/berufsdetektei'
        },
        {
          title: 'Personenschutz',
          route: '/services/personenschutz'
        },
      ]
    },
    {
      title: 'Personal',
      children: [
        {
          title: 'Ausbildung',
          route: 'employees/training'
        },
        {
          title: 'Jetzt bewerben',
          route: '/employees/hiring'
        },
      ]
    },
    {
      title: 'Referenzen',
      children: [
        {
          title: 'Kundinnen & Kunden',
          route: '/references/1'
        },
        {
          title: 'Locations',
          route: '/references/2'
        },
        {
          title: 'Konzerte & Festivals',
          route: '/references/3'
        }, {
          title: 'Veranstaltungs- bzw. Objektschutz',
          route: '/references/4'
        }, {
          title: 'Messen',
          route: '/references/5'
        }, {
          title: 'Gastronomie',
          route: '/references/6'
        }, {
          title: 'Revierstreife & Objektbetreuung',
          route: '/references/7'
        }, {
          title: 'Baustellenüberwachung & Verkehrsregelung',
          route: '/references/8'
        }, {
          title: 'Personenschutz',
          route: '/references/29'
        },
        {
          title: 'Kaufhausdetektei',
          route: '/references/10'
        },
      ]
    },
    {
      title: 'Galerie',
      children: [
        {
          title: 'Im Dienst',
          route: 'gallery/dienst'
        },
        {
          title: 'Autogramme',
          route: 'gallery/autogramme'
        },
        {
          title: 'Presse',
          route: 'gallery/presse'
        }

      ]
    }
  ];
  
  toogleState = new Subject<boolean>();
  toogleMainState = new Subject<boolean>();
  selectedNav = new Subject<Navigation>();

  constructor() { }

  onToogleSubNav(toogleState: boolean){
    this.toogleState.next(toogleState)
  }

  loadTestData(){
    
  }
  onToogleMainNav(toogleState: boolean){
    this.toogleState.next(toogleState)

  }
  onSelectNav(index: number){
    const navigation: Navigation = this.navigations[index];
    this.toogleState.next(true);
    this.selectedNav.next(navigation);
  }


  getNavigation() {
    return this.navigations.slice()
  }

}
