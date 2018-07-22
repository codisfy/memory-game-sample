import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handledNewGame } from "../store/actions/game";

class Navbar extends Component {
    
    static propTypes = {
        onNewGame: PropTypes.func
    }

    render() {
        let date = new Date(null);
        date.setSeconds(this.props.timer); // specify value for SECONDS here
        let timeRemaining = date.toISOString().substr(11, 8);
        return (
            <header>
                <h2> <a> Memory Game </a> </h2>
                    <nav>
                        <li><a onClick={this.props.onNewGame}> New Game </a> </li>
                        <li><a> time remaining {timeRemaining}</a> </li>
                        <li><a> About </a> </li>
                        <li><a> Contact </a> </li>
                        </nav>

                </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        timer: state.game.timer
    };
}

export default connect(mapStateToProps, {onNewGame: handledNewGame})(Navbar);