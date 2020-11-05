import React from 'react'
import Login from '../Login';
import {
    Switch,
    Route
} from 'react-router-dom';
import Registration from '../Registration';
import {Cards} from '../../containers/Cards';
import CreateEditBlock from '../../containers/CreateEditBlock';
import CreateEditCard from '../../containers/CreateEditCard';
import Home from '../Home';


export default function SwitchRoute(props) {

    const isLoggedIn = props.userName !== '';

    if (isLoggedIn)
        return (
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Registration}/>
                <Route path="/all_cards" component={Cards}/>
                <Route path="/my_cards" component={Cards}/>
                <Route path="/other_cards" component={Cards}/>
                <Route path="/create_card/:id" component={CreateEditCard}/>
                <Route path="/edit_card/:id" component={CreateEditCard}/>
                <Route path="/add_block/:idCard" component={CreateEditBlock}/>
            </Switch>
        )
    else
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Registration}/>
                <Route path="/all_cards" component={Login}/>
                <Route path="/create_card/:id" component={Login}/>
                <Route path="/edit_card/:id" component={Login}/>
                <Route path="/add_block/:idCard" component={Login}/>
            </Switch>
        )
}
