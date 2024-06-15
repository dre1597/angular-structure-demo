import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

import { AuthGuard } from './core/auth/auth.guard';
import { IsLoggedGuard } from './core/auth/is-logged.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    component: TodoComponent,
    canActivate: [AuthGuard],
  },
];
