import React, { Component } from 'react';
import PokeBallDisplay from './PokeBallDisplay';

class PokeBallSearch extends Component {
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

    handleSearch = async (event) =>{
        event.preventDefault();
        console.log('randomSearch')
        const query = Math.floor(Math.random()*500);
        const url = `https://pokeapi.co/api/v2/pokemon/${query}`
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

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitting pokeSearch")
        const query = this.state.userInput
        const url = `https://pokeapi.co/api/v2/item/${query}`
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

    render(){
        return (
            <div>
                <h1>PokeItem Search</h1>
                <h3>Welcome to the Pokemon Item search <br/> In this search you will find every item that exists in the pokemon games <br/> and provides a little bit of insight about them. <br/> this list goes up number 1005</h3>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.userInput} onChange={this.handleChange} placeholder='Please enter a number'/>
                    <button typeof='submit'>Search </button>
                    <button typeof='search' onClick={this.handleSearch}>Surprise Me!</button>
                    <PokeBallDisplay ballInfo={this.state.data}/>
                </form>
            </div>
        );
    }
}


export default PokeBallSearch;