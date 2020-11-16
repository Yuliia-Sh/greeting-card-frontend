import React from "react";
import InputTextWithLabel from "../../../components/UI/InputTextWithLabel";
import ChangePasswordCommandRow from "./ChangePasswordCommandRow";

export default function ChangePassword() {
  function save_password() {
    console.log("save password");
  }

  return (
    <div className="main-functions">
      <ChangePasswordCommandRow onSubmit={save_password} />
      <main class="container">
        <form id="password-changeable" className="profile-details-changeable">
          <div className="profile-text-change__column no-margin-left no-border">
            <InputTextWithLabel
              columnName="old_password"
              labelText="Old Password:"
            />
            <InputTextWithLabel
              columnName="new_password"
              labelText="New Password:"
            />
            <InputTextWithLabel
              columnName="check_new_password"
              labelText="Check New Password:"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
