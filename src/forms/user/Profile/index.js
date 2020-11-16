import React, { Component } from "react";
import InputTextWithLabel from "../../../components/UI/InputTextWithLabel";
import ProfileCommandRow from "./ProfileCommandRow";
import ProfilePicture from "./ProfilePicture";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: '',
        login: '',
        profile_img:'' 
    }
    this.save = this.save.bind(this);
  }

  save() {}

  render() {
    return (
      <div className="main-functions">
        <ProfileCommandRow onSubmit={this.save} />
        <main className="container">
          <form className="profile-details-changeable">
             <ProfilePicture/>
             <div className="profile-text-change__column">
                <InputTextWithLabel columnName="firstName" labelText="First Name:"/>
                <InputTextWithLabel columnName="lastName" labelText="Last Name:"/>
                <InputTextWithLabel columnName="login" labelText="Login:"/>
             </div>
          </form>
        </main>
      </div>
    );
  }
}

export default Profile;
