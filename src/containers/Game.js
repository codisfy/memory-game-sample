import React, { Component } from 'react';
import Card from '../components/Card'
import { connect } from "react-redux";
import { constants } from "../constants";
import { handleCardClicked} from "../store/actions/game";

class Game extends Component {


    render() {
        let { gameState, cards } = this.props.game;
        return (
            <div>
                {(constants.GAME_WON === gameState && <h1>You Won </h1>) ||
                    (constants.GAME_LOST === gameState && <h1>You Lose </h1>) ||
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

export default connect(mapStateToProps, {handleCardClicked})(Game);