import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom';
import {Cards} from '../../containers/Cards';
import CreateEditBlock from '../../containers/CreateEditBlock';
import CreateEditCard from '../../containers/CreateEditCard';
import Home from '../Home';
import Login from '../../forms/user/Login';
import Registration from '../../forms/user/Registration';
import Profile from '../../forms/user/Profile';
import ChangePassword from '../../forms/user/ChangePassword';
import CardUsers from '../../containers/CardUsers';


export default function SwitchRoute(props) {

    const isLoggedIn = props.userName !== '';

    if (isLoggedIn)
        return (
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Registration}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/card_users/:id" component={CardUsers}/>
                <Route path="/change_password" component={ChangePassword}/>
                <Route path="/cards/:type" component={Cards}/>
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
                <Route path="/cards/:type" component={Login}/>
                <Route path="/create_card/:id" component={Login}/>
                <Route path="/edit_card/:id" component={Login}/>
                <Route path="/add_block/:idCard" component={Login}/>
            </Switch>
        )
}
