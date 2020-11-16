import React from 'react'
import {userService} from '../../../services/userService';
import LoginFilterPages from '../../../components/LoginFilterPages'
import './style.css';
import '../style.css';

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            login: '',
            password: '',
            password_check: ''
        }
    }

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    registration = (event) => {
        event.preventDefault();
        const userObject = {
            firstName: this.state.first_name,
            lastName: this.state.last_name,
            email: this.state.email,
            login: this.state.login,
            password: this.state.password
        };
        userService.registerUser(userObject);
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="main-functions">
                <LoginFilterPages page="signup"/>
                <main className="container">
                    <form id="profile-text">
                        <input type="email" className="styled-as-input" name="email" placeholder="input e-mail"
                               onChange={this.myChangeHandler}/>
                        <div className="signature-block">
                            <input type="text" className="styled-as-input" name="first_name"
                                   placeholder="input first name" onChange={this.myChangeHandler}/>
                            <input type="text" className="styled-as-input" name="last_name"
                                   placeholder="input last name" onChange={this.myChangeHandler}/>
                        </div>
                        <input type="text" className="styled-as-input" name="login" placeholder="input username"
                               onChange={this.myChangeHandler}/>
                        <input type="password" className="password styled-as-input" name="password"
                               placeholder="input password" onChange={this.myChangeHandler}/>
                        <input type="password" className="password styled-as-input" name="password_check"
                               placeholder="input password" onChange={this.myChangeHandler}/>
                        <input type="submit" className="command-button" value="Sign Up" onClick={this.registration}/>
                    </form>
                </main>
            </div>
        )
    }
}

export default Registration;