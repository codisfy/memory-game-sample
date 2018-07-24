import React, { Component } from 'react';
import Card from '../components/Card'
import { connect } from "react-redux";
import { constants } from "../constants";
import { handleCardClicked, handledNewGame} from "../store/actions/game";

class Game extends Component {

    componentDidMount() {
        this.props.handledNewGame();
    }

    render() {
        let { gameState, cards } = this.props.game;
        return (
            <div>
                {(constants.GAME_WON === gameState && <h1 className="end-game win">You Won </h1>) ||
                    (constants.GAME_LOST === gameState && <h1 className="end-game lose">You Lose </h1>) ||
                    ((constants.NEW_GAME === gameState || constants.GAME_STARTED === gameState) && (
                        cards.map((card) => {
                            return <Card key={card.id} {...card} game={this.props.game} showing={card.cardState !== constants.CARD_HIDDEN} handleCardClicked={this.props.handleCardClicked} />
                        }))
                    )

                }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        game: state.game
    };
}

export default connect(mapStateToProps, {handleCardClicked, handledNewGame})(Game);