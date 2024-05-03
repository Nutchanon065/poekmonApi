import React, { useEffect, useState } from 'react';
import './field.css';
import axios from 'axios';

function Battlefield() {
    const [pokeName, setPokeName] = useState([]);
    const [pokeImg1, setPokeImg1] = useState('');
    const [pokeImg2, setPokeImg2] = useState('');
    const [pokeMoves1, setPokeMoves1] = useState([]);
    const [selectedPokemonName, setSelectedPokemonName] = useState('');
    const [selectedMoveName, setSelectedMoveName] = useState('');
    const [error, setError] = useState(null);

    const handleChange1 = async (event) => {
        const selectedPokemon = event.target.value;
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
            setSelectedMoveName('');
            setSelectedPokemonName(response.data.name);
            setPokeImg1(response.data.sprites.back_default);
            setPokeMoves1(response.data.moves.slice(0, 4).map(move => move.move.name));
        } catch (err) {
            setError(err);
        }
    };

    const handleChange2 = async (event) => {
        const selectedPokemon = event.target.value;
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
            setPokeImg2(response.data.sprites.front_default);
        } catch (err) {
            setError(err);
        }
    };

    const handleChangeMove = (moveName) => {
        setSelectedMoveName(moveName);
        setSelectedPokemonName('');
    };

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
            .then(res => {
                const names = res.data.results.map(pokemon => pokemon.name);
                setPokeName(names);
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    return (
        <div className='field'>
            <div className='background-image'>
                <div className='selection-container'>
                    <select className='selection' onChange={handleChange1}>
                        {pokeName.map((name, index) => (
                            <option key={index}>{name}</option>
                        ))}
                    </select>
                    <select className='selection' onChange={handleChange2}>
                        {pokeName.map((name, index) => (
                            <option key={index}>{name}</option>
                        ))}
                    </select>
                </div>
                <br />
                {pokeImg1 && (<img src={pokeImg1} alt="Pokemon" style={{ width: 200, height: 200 }} />)}
                {pokeImg2 && (<img src={pokeImg2} alt="Pokemon" style={{ width: 200, height: 200 }} />)}
        
                <div className='footer'>
                    <div className="footer-left">
                        <p style={{ color: 'black' }}>
                            {selectedPokemonName ? `You Choose ${selectedPokemonName}` : ''}
                            {selectedMoveName ? ` Use Move ${selectedMoveName}` : ''}
                        </p>
                    </div>

                    <div className="footer-right">
                        <>
                        {pokeMoves1.map((move, index) => (
                            <button style={{ width: 150, height: 50, fontSize: 15 }} 
                            onClick={() => handleChangeMove(move)}>
                            {move}
                            </button>
                        ))}
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Battlefield;
