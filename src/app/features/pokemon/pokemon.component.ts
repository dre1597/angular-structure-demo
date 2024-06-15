import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from './shared/pokemon.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
  providers: [PokemonService],
})
export class PokemonComponent {
  private readonly pokemonService = inject(PokemonService);
  protected items$ = this.pokemonService.findAll();
  private readonly router = inject(Router);

  protected goToDetails(id: string) {
    this.router.navigate(['pokemon', id]);
  }
}
