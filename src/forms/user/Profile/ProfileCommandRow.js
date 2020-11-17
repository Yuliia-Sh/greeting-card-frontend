import React from "react";
import CommandButton from "../../../components/UI/CommandButton";
import CommandButtonLink from "../../../components/UI/CommandButton/CommandButtonLink";

export default function ProfileCommandRow(props) {
  return (
    <div className="command__row">
      <div className="filter"></div>
      <div className="actions__row">
        <CommandButton
          className="yellow-button command-button"
          caption="Save changes"
          action={props.onSubmit}
        />
        <CommandButtonLink
          to="/change_password"
          className="white-button command-button"
          caption="Change password"
        />
      </div>
    </div>
  );
}
