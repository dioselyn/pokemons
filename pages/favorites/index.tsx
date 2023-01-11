import React, { useState, useEffect } from "react";
import { Layout } from "../../components/layouts/Layout";
import { Container, Text, Image, Grid, Card } from "@nextui-org/react";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
