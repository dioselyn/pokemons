import { FC } from "react";
import { Card, Row, Text } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card isHoverable isPressable onPress={onClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={pokemon.img} width="100" height={140} />
      </Card.Body>
      <Card.Footer>
        <Row justify="space-between">
          <Text>{pokemon.name}</Text>
          <Text>#{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
