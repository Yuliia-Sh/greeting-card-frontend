import React from 'react'
import {Link} from 'react-router-dom'
import CommandButton from '../UI/CommandButton'
import {cardService} from '../../services/cardService';

export default function CardCommandRow(props) {
    const id = props.idCard;

    const finishCard = () => {
        cardService.finishCard(id);
        props.history.push('/cards/my');
    }

    const deleteCard = () => {
        cardService.deleteCard(id);
        props.history.push('/cards/my');
    }

    return (
        <div className="command__row">
            <div className="filter__blocks">
            </div>

            <div className="actions__row">
                <Link to={'/add_block/' + id} className="yellow-button command-button">+ Add block</Link>
                <CommandButton className="white-button command-button" caption="Finish Card" action={finishCard}/>
                <CommandButton className="yellow-button command-button" caption="Delete Card" action={deleteCard}/>
            </div>
        </div>
    )
}
