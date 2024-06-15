export type Pokemon = {
  name: string;
  id?: string;
};

export type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonDetails = {
  id: number;
  name: string;
  image: string;
};

export type PokemonDetailsResponse = {
  id: number;
  name: string;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
};
