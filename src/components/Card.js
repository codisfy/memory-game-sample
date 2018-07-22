import React, { Component}  from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired, 
        cardState: PropTypes.number.isRequired,
        id : PropTypes.number.isRequired
    }

    render () {
      
        let {id, cardState, color, handleCardClicked, showing} = this.props;
        let style = {
            backgroundColor: showing ? color : 'gray',
        }
        return (
            <div className="card-container" style={style} onClick={() => handleCardClicked({id, color, cardState})}>

            </div>
        )
    }
}

export default Card;