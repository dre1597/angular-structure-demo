import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  protected loggedRoutes = [
    {
      name: 'Home',
      url: '',
    },
    {
      name: 'About',
      url: 'about',
    },
  ];

  protected notLoggedRoutes = [
    {
      name: 'Login',
      url: '',
    },
    {
      name: 'About',
      url: 'about',
    },
  ];

  protected readonly authService = inject(AuthService);

  protected logout() {
    this.authService.logout();
  }
}
