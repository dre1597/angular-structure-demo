import { Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';

import { AuthGuard } from './core/auth/auth.guard';
import { IsLoggedGuard } from './core/auth/is-logged.guard';
import { AboutComponent } from './features/about/about.component';
import { PokemonComponent } from './features/pokemon/pokemon.component';
import { PokemonDetailsComponent } from './features/pokemon/details/pokemon-details.component';

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
    path: 'pokemon',
    component: PokemonComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
  {
    path: 'pokemon/:id',
    component: PokemonDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon',
  },
];
