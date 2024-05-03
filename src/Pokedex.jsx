import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
{/*import { fetchPokemon } from '../api/fetchPokemon';
*/}

function Pokedex() {
    const { pokeName } = useParams();
    const [pokeDex, setPokeDex] = useState(undefined);
    useEffect(() => {
        fetchData();
        return () => {};
    }, []);

    const fetchData = async() =>{
        let pokemonData = await fetchPokemon(pokeName);
        if(pokemonData != undefined) {
            console.log("pokemonData != undefined", pokemonData);
            setPokeDex({
                name: pokemonData?.name,
                height: pokemonData?.height,
            });
            setPokeDex(undefined);
        }
    };

    return (
        <div>
            {pokeDex !== undefined ? (
                <>  
                    <b>Name: {pokeDex?.name}</b>&nbsp;<b>Height: {pokeDex?.height}</b>
                </>
            ) : (
                <>
                    <b>Pokemon not found!!!</b>
                </>
            )}
        </div>
    );
}

export default Pokedex;

