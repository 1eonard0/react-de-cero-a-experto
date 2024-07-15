import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultiplesCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}/`);

  return (
    <>
        <h1>Información de Pokémon</h1>
        <hr />
        { isLoading == true && <LoadingMessage />}

        { isLoading == false && <PokemonCard id={data.id} name={data.name} sprites={data?.sprites.front_shiny}/>}
        
        <button onClick={ () => counter > 1 ? decrement() : null } className='btn btn-primary'>Anterior</button>
        <button onClick={ () => increment() } className='btn btn-primary'>Siguiente</button>
    </>
  )
}
