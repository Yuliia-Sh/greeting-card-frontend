import React, {Component} from 'react'
import './style.css';

import CardsFilterPages from '../../components/CardsFilterPages'
import Card from '../../components/Card';
import {cardService} from '../../services/cardService';

export class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            countCards:0
        }

        this.deleteCard = this.deleteCard.bind(this);
    }

    componentDidMount() {
        cardService.getCards()
            .then((cardsData) => {this.setState({cards: cardsData, countCards: cardsData.length}); });
    }

    deleteCard(cardId) {
        const newCards = this.state.cards.filter(card=> card.id !== cardId);
        this.setState({cards:newCards});
    }

    render() {
        const cardTags = this.state.cards.map((card) => (<Card key={card.id} card={card} {...this.props} onDeleteCard={this.deleteCard}/>));

        return (
            <div className="main-functions">
                <CardsFilterPages {...this.props} page="all_cards"/>
                <main className="container-cards">
                    <div className="list-of-cards">
                        {cardTags}
                    </div>
                </main>
            </div>
        )
    }
}

export default Cards
