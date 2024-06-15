import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import {
  Pokemon,
  PokemonDetails,
  PokemonDetailsResponse,
  PokemonResponse,
} from './pokemon.model';

@Injectable()
export class PokemonService {
  private readonly http = inject(HttpClient);

  public findAll(): Observable<Pokemon[]> {
    return this.http
      .get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon')
      .pipe(
        map(({ results }) =>
          results.map(({ name, url }) => {
            const id = url.split('/').filter(Boolean).pop();
            return { name, id };
          })
        )
      );
  }

  public findOne(id: number): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetailsResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(
        map(({ id, name, sprites: { front_default: image } }) => ({
          id,
          name,
          image,
        }))
      );
  }
}
