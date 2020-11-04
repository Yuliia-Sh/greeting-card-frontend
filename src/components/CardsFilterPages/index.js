import React from 'react'
import {FormCreateCard} from '../FormCreateCard';
import './style.css';

export default function CardsFilterPages(props) {
    /*const filter = <div className="filter__cards">
       <FilterButton linkTo="/all_cards" caption="All Cards" isActive={props.page !=='all_cards' || props.page == null} />
       <FilterButton linkTo="/my_cards"  caption="My Cards" isActive={props.page !=='my_cards'} />
       <FilterButton linkTo="/other_cards"  caption="Other Cards" isActive={props.page !=='other_cards'} />
   </div>;*/

    const withoutFilter = <div className="filter__cards"></div>;
    return (
        <div className="command__row">
            {withoutFilter}
            <FormCreateCard {...props}/>
        </div>
    )
}
