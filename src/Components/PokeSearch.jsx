import React, { Component } from 'react';

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


    handleSubmit = async (event) => {
        event.preventDefault();
        console.log("submitting pokeSearch")
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.userInput} onChange={this.handleChange} />
                    <button typeof='submit'>Search </button>
                    <PokeSearch pokeInfo={this.state.data}/>
                </form>
            </div>
        );
    }
}


export default PokeSearch;