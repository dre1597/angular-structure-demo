import { Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { TodoComponent } from './features/todo/todo.component';

import { AuthGuard } from './core/auth/auth.guard';
import { IsLoggedGuard } from './core/auth/is-logged.guard';
import { AboutComponent } from './features/about/about.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent,
    canActivate: [AuthGuard],
  },
];
