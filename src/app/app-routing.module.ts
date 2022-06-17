import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: 'references', loadChildren: () => import('./references/references.module').then(m => m.ReferencesModule) },
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
  { path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: 'legal', loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule) },
  { path: 'impress', loadChildren: () => import('./impress/impress.module').then(m => m.ImpressModule) },

  { path: 'certificate', loadChildren: () => import('./certificate/certificate.module').then(m => m.CertificateModule) },

  { path: 'sponsoring', loadChildren: () => import('./sponsoring/sponsoring.module').then(m => m.SponsoringModule) },

  { path: 'partner', loadChildren: () => import('./partner/partner.module').then(m => m.PartnerModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
