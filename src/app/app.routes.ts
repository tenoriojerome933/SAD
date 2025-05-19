import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'page',
    component: PageComponent,
    children: [
      {
        path: 'appointment',
        loadChildren: () =>
          import('./Modules/appointment/appointment.routes').then((r) => r.AppointmentRoutes),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./Modules/home/home.routes').then((r) => r.HomeRoutes),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
