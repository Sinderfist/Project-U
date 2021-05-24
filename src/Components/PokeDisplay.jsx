import React, { Component } from 'react';

class PokeDisplay extends Component {
    render() {
        return (
            <div>
                {/* I want the data to be tested as is comes through props
                I want it to check to see if there is an image to display
                if there is no image to display I want a static image to display */}
                {this.props.pokeInfo.name === undefined
                    ?
                    null
                    :
                    <div>
                        <h1>Name: {this.props.pokeInfo.name}</h1>
                        <img alt='' src={this.props.pokeInfo.sprites.other.["official-artwork"].front_default} />
                        <h2>This Pokemons's number is: {this.props.pokeInfo.id}</h2>
                        <h2>This Pokemon's type is: {this.props.pokeInfo.types.[0].type.name}</h2>
                        <h3>Usually found at a height of {this.props.pokeInfo.height}</h3>
                        <h3>Usually found at a weight of {this.props.pokeInfo.weight}</h3>
                    </div>
                }
            </div>
        );
    }
}

export default PokeDisplay;