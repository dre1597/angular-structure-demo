import { Component, inject } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
  providers: [PokemonService],
})
export class PokemonDetailsComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  private readonly pokemonService = inject(PokemonService);

  protected pokemon$ = this.pokemonService.findOne(this.id);
}
