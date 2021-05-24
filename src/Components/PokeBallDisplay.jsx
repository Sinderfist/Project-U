import React, { Component } from 'react';

class PokeBallDisplay extends Component {
    render() {
        return (
            <div>
                {this.props.ballInfo.name === undefined
                    ?
                    null
                    :
                    <div className='infoCard'>
                        <h1>{this.props.ballInfo.name}</h1>
                        <img alt='' src={this.props.ballInfo.sprites.default} />
                        <h3>{this.props.ballInfo.flavor_text_entries[0].text}</h3>
                    </div>
                }
                {/* {console.log(this.props.ballInfo)} */}
            </div>
        );
    }
}

export default PokeBallDisplay;