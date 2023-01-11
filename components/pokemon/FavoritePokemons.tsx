import React, { FC } from "react";
import { Grid, Card } from "@nextui-org/react";
import FavoriteCardPokemon from "./FavoriteCardPokemon";

type Props = {
  pokemons: number[];
};

const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id: number) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemons;
