import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
               <Search /> 
            </div>
        );
    }
}

export default Home;