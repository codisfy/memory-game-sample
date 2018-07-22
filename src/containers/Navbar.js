import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navbar extends Component {
    
    static propTypes = {
        onNewGame: PropTypes.func
    }

    render() {
        return (
            <header>
                <h2> <a> Memory Game </a> </h2>
                    <nav>
                        <li><a onClick={this.props.onNewGame}> New Game </a> </li>
                        <li><a> Home</a> </li>
                        <li><a> About </a> </li>
                        <li><a> Contact </a> </li>
                        </nav>

                </header>
        )
    }
}

export default Navbar;