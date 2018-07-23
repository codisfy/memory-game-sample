import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { handledNewGame, handleGameLost } from "../store/actions/game";
import {constants} from "../constants";
class Navbar extends Component {
    
    static propTypes = {
        onNewGame: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            timer: constants.TOTAL_TIME
        } 
        this.handleNewGame = this.handleNewGame.bind(this);
        this.tick = this.tick.bind(this);
    }

    componentDidMount () {
      this.handleNewGame();
    }

    handleNewGame() {
        this.props.onNewGame();
        clearInterval(this.timer);  
        this.setState({timer:constants.TOTAL_TIME}, () => {
            this.timer = setInterval(() => {
                this.tick();
            }, 1000);
            this.tick();
        });
    }

   
    tick() {
        let timer = this.state.timer - 1;
        if (timer === 0) {
            this.props.handleGameLost();
            clearInterval(this.timer);
            timer =  constants.TOTAL_TIME;
        } else if (this.props.gameState === constants.GAME_WON) {
            clearInterval(this.timer);
            timer =  constants.TOTAL_TIME;
        }    
        this.setState({timer});
    }

    render() {
        let date = new Date(null);
        date.setSeconds(this.state.timer); 
        let timeRemaining = date.toISOString().substr(11, 8);
        return (
            <header>
                <h2> <a> Memory Game </a> </h2>
                    <nav>
                        <li><a onClick={this.handleNewGame}> New Game </a> </li>
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
        gameState: state.game.gameState
    };
}

export default connect(mapStateToProps, {onNewGame: handledNewGame, handleGameLost})(Navbar);