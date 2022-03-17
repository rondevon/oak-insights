import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from '../pages/alerts/alerts.component';
import { MyprofileComponent } from '../pages/myprofile/myprofile.component';
import { DashboardGuard } from '../guards/dashboard.guard';


const routes: Routes = [
  { path: 'oak', component: LandingComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'myprofile', component: MyprofileComponent },
  {
    path: 'oak/dashboard/:site_slug',
    canActivate: [DashboardGuard],
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'pages', pathMatch: 'full' },
      {
        path: 'pages',
        loadChildren: () =>
          import('../pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
