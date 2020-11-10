import React, { Component } from "react";
import "./style.css";

import CardsFilterPages from "../../components/CardsFilterPages";
import { cardService } from "../../services/cardService";
import { userContext } from "../../context/userContext";
import CardItems from "./CardItems";
import data from "./data.json";

export class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };

    this.deleteCard = this.deleteCard.bind(this);
  }

  componentDidMount() {
    cardService.getCards().then((cardsData) => {
      this.setState({ cards: cardsData });
    });
  }

  deleteCard(cardId) {
    const newCards = this.state.cards.filter((card) => card.id !== cardId);
    this.setState({ cards: newCards });
  }

  render() {
    const page = this.props.location.pathname.replace("/cards/", "") + "_cards";

    return (
      <div className="main-functions">
        <CardsFilterPages {...this.props} page={page} />
        <main className="container-cards">
          <div className="list-of-cards">
            <userContext.Consumer>
              {({ user }) => (
                <CardItems
                  user={user}
                  page={page}
                  cards={this.state.cards}
                  {...this.props}
                  onDeleteCard={this.deleteCard}
                />
              )}
            </userContext.Consumer>
          </div>
        </main>
      </div>
    );
  }
}

export default Cards;
