import React, { useContext } from 'react'


function PokeCard(props) {

    const {pokemon} = props;

    return (
        <>
                <div className='card'>
                    <img src={pokemon.sprites.front_default} alt="" />
                    <div className='num-pokemon'>#{pokemon.id}</div>
                    <div className='name-pokemon'>{pokemon.name}</div>
                    <div className='types'>
                        { 
                            pokemon.types.map((type, index)=>{
                                return <div className='type-pokemon' key={index}>{type.type.name}</div>
                            })
                        }
                    </div>
                </div>
        </>
    )
}

export default PokeCard

