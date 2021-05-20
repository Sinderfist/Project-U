import React, { Component } from 'react';

class PokeDisplay extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.pokeInfo.name}</h1>
                <h1>{this.props.pokeInfo.id}</h1>
            </div>
        );
    }
}

export default PokeDisplay;