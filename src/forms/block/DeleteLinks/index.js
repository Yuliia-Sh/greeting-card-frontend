import React, { Component } from "react";
import CommandRowDeleteLinks from "./CommandRowDeleteLinks";
import ElementLink from "./ElementLink";
import "./style.css";

export default class DeleteLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linksToDelete: [],
    };
  }

  handleDeleteLinks = (event) => {
    event.preventDefault();
  };

  showPreview(array, type) {
    return array.map((src) => (
      <ElementLink
        key={src}
        isPreview={true}
        src={src}
        imageOrAudio={type}
      />
      ));
  }
  
  render() {
    return (
      <form action="#" id="optional-elements__box">
        {(this.props.links.length > 0) && <CommandRowDeleteLinks deleteLinksFunction={this.handleDeleteLinks} />}
        <div className="container">
          {this.showPreview(this.props.audioToAdd, "audio")}
          {this.showPreview(this.props.imagesToAdd, "image")}
        </div>
      </form>
    );
  }
}
