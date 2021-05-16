import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }
    }

    handleChange = (event) => {
        // event.preventDefault    
        this.setState({
            userInput: event.target.value
        })
    }

    handleSubmit = (event) => {
        // event.preventDefault

    }



    render() {
        return (
            <div>
                <form onSubmit='handleSubmit'>
                    <input typeof='text' value={this.state.userInput} onChange={this.handleChange}></input>
                    <button typeof='submit'>search</button>
                </form>
            </div>
        );
    }
}

export default Search;