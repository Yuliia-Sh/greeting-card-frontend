import React from 'react'
import './style.css';
import LoginFilterPages from '../LoginFilterPages';
import {userContext} from '../../context/userContext';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "Yuliya",
            password: "1111"
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, loginUser) {
        event.preventDefault();
        loginUser(this.state.login, this.state.password).then(() => {
            this.props.history.push("/all_cards");
        });

    }

    render() {
        return (
            <div className="main-functions">
                <LoginFilterPages page="login"/>
                <main className="container">
                    <form id="profile-text">
                        <input type="text" className="styled-as-input"
                               onChange={(event) => this.setState({login: event.target.value})}
                               placeholder="email"/>
                        <input type="password" className="password styled-as-input"
                               onChange={(event) => this.setState({password: event.target.value})}
                               placeholder="password"/>
                        <userContext.Consumer>
                            {({loginUser}) => (
                                <input type="submit" className="command-button" value="Log in" onClick={(event) => {
                                    this.handleSubmit(event, loginUser)
                                }}/>)}
                        </userContext.Consumer>
                    </form>
                </main>
            </div>
        )
    }
}

export default Login
