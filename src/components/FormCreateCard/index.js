import React, {Component} from 'react'
import {cardService} from '../../services/cardService';
import './style.css';


export class FormCreateCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardName: ''
        }
    }

    hanleChange = (event) => {
        let nameInput = event.target.name;
        let valueInput = event.target.value;
        this.setState({[nameInput]: valueInput});
    }

    createCard = (event) => {
        event.preventDefault();
        cardService.createCard(this.state.cardName)
            .then((response) => response.json())
            .then((data) => this.props.history.push('/edit_card/' + data.id));
    }

    render() {
        return (
            <form id="create-card" action="#">
                <input type="text" className="card-name" name="cardName" placeholder="Name new card"
                       onChange={this.hanleChange}/>
                <input type="submit" className="command-button create-button" value="Create Card"
                       onClick={this.createCard}/>
            </form>
        )
    }
}

export default FormCreateCard
