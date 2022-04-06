import { NextPage } from "next";
import { useGetPokemonByNameQuery } from "../services/pokemon";

const Pokemon: NextPage = (props) => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  return (
    <div>
      <h1>Pokemon</h1>
      <p>
        <a href="https://redux-toolkit.js.org/tutorials/rtk-query">
          see the tutorial
        </a>
      </p>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Pokemon;
