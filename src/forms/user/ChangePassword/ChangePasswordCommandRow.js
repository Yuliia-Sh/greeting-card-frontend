import React from "react";
import CommandButton from "../../../components/UI/CommandButton";
import CommandButtonLink from "../../../components/UI/CommandButton/CommandButtonLink";

export default function ChangePasswordCommandRow(props) {
  return (
    <div className="command__row">
      <div className="filter"></div>
      <div className="actions__row">
        <CommandButton
          className="yellow-button command-button"
          caption="Save password"
          action={props.onSubmit}
        />
        <CommandButtonLink
          to="/profile"
          className="white-button command-button"
          caption="Cancel"
        />
      </div>
    </div>
  );
}
