import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired, 
        cardState: PropTypes.number.isRequired,
        id : PropTypes.number.isRequired
    }

    render () {
      
        let {id, cardState, color, handleCardClicked, game, showing} = this.props;
        let style = {
            width: "180px", 
            height: "180px", 
            display: "inline-block",
            margin: "2px",
            backgroundColor: showing ? color : 'gray',
        }
        return (
            <div style={style} onClick={() => handleCardClicked({id, color, cardState})}>

            </div>
        )
    }
}

export default Card;