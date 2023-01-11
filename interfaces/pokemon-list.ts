export interface SmallPokemon {
  id: number;
  name: string;
  url: string;
  img: string;
}

export interface PokemonListResponse {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

interface Result {
  name: string;
  url: string;
}
