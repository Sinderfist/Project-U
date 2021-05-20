import React, { Component } from 'react';
import PokeDisplay from './PokeDisplay';
import PokeSearch from './PokeSearch';

class DisplayPage extends Component {
    render() {
        return (
            <div>
                <PokeSearch />
            </div>
        );
    }
}

export default DisplayPage;