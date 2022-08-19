import React, { useState, useEffect } from 'react';

function Character() {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => setCharacter(data.results));
        },[]);
        return (
            <div className='Characters'>
                <h1>Characters</h1>
                {character.map((char) => {
                    return (
                        <div key={char.id}>
                            <h3>{char.name}</h3>
                            <img src={char.image} alt="character"></img>
                        </div>
                    )
                })}
            </div>
        )
    }
export default Character;