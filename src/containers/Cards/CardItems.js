import React from 'react'
import Card from '../../components/Card';

export default function CardItems(props) {
    let cards = props.cards;
    const userName = props.user;

    if (props.page === 'my_cards') {
       cards = cards.filter(card => card.user.login === userName);    
    } else if (props.page === 'other_cards') {
        cards = cards.filter(card => card.user.login !== userName);    
     }  

    return (
        cards.map((card) => (<Card key={card.id} 
            card={card} {...props} 
            onDeleteCard={props.onDeleteCard}/>))
    )
}
