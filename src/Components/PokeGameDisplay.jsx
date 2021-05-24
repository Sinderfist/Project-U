import React, { Component } from 'react';

class PokeGameDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.gameData.name === undefined
                    ?
                    null
                    :
                    <div>
                        <h1> {this.props.gameData.versions.[0].name}</h1>
                        <h1>{this.props.gameData.regions.[0].name}</h1> 
                        <h2>{this.props.gameData.generation.name}</h2>
                    </div>
                }

                {/* {console.log(this.props.gameData)} */}
            </div >
        );
    }
}

export default PokeGameDisplay;