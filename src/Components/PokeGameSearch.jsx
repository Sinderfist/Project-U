import React, { Component } from 'react';
import PokeGameDisplay from './PokeGameDisplay';

class PokeGameSearch extends Component {
    constructor() {
        super()
        this.state = {
            data: '',
            userInput: '',
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            userInput: event.target.value
        })
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitting pokeSearch")
        const query = this.state.userInput
        const url = `https://pokeapi.co/api/v2/version-group/${query}/`
        try {
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
                data: data
            })
        }
        catch (err) {
            console.log(err)
        }

    }
    render() {
        return (
            <div className='pokeGameDisplay'>
                <h1>PokeGame Search</h1>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.userInput} onChange={this.handleChange} placeholder='Number 1 - 20' />
                    <button typeof='submit'>Search </button>
                </form>
                <PokeGameDisplay gameData={this.state.data}/>
                {/* {console.log(this.state.data)} */}
            </div>
        );
    }
}

export default PokeGameSearch;