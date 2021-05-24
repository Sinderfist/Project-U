import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div className='landingPage'>
                <h1>Welcome to the PokeDex</h1>

                <Link to='/PokeSearch'>
                <div className='pokeSearch'></div>
                </Link>
                
                <Link to='/PokeBallSearch'>
                <div className='pokeBall'></div>
                </Link>
                
                <Link to='/PokeGameSearch'>
                <div className='pokeGame'> Link to PokeGameSearch</div>
                </Link>

            </div >
        );
    }
}

export default LandingPage;