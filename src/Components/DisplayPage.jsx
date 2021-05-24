import React, { Component } from 'react';
import PokeBallSearch from './PokeBallSearch';
import PokeGameSearch from './PokeGameSearch'
// import PokeSearch from './PokeSearch';

class DisplayPage extends Component {
    render() {
        return (
            <div>
                {/* <h1>Pokemon Search</h1> */}
                {/* <PokeSearch /> */}
                <h1>PokemonGame</h1>
                <PokeGameSearch />
                <h1>PokeBalls</h1>
                <PokeBallSearch />
            </div>
        );
    }
}

export default DisplayPage;