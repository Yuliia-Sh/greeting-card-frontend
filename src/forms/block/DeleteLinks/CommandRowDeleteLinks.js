import React from "react";
import CommandButton from "../../../components/UI/CommandButton";

export default function CommandRowDeleteLinks(props) {
  return (
    <div className="command__row">
      <div className="filter__blocks"></div>
      <div className="actions__row">
        <CommandButton
          className="yellow-button command-button"
          caption="Delete Selected"
          action={props.deleteLinksFunction}
        />
      </div>
    </div>
  );
}
