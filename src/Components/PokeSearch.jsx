import React, { Component } from 'react';
import PokeDisplay from './PokeDisplay';

class PokeSearch extends Component {
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
        const query = this.state.userInput
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

    render(){
        return (
            <div className='pokeDex'>
                <h1>PokeSearch</h1>
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.userInput} onChange={this.handleChange} placeholder='Enter a name or a number'/>
                    <button typeof='submit'>Search </button>
                    <button onClick={this.handleSearch}>Surprise Me!</button>
                    <PokeDisplay pokeInfo={this.state.data}/>
                </form>
            </div>
        );
    }
}


export default PokeSearch;