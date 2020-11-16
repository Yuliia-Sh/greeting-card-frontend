import React from "react";
import './style.css';

import editImg from "../../../../assets/images/edit.jpg";
import userImg from "../../../../assets/images/user.png";

export default function ProfilePicture(props) {
  return (
    <div className="profile-picture__row">
      <div className="profile-picture-change__column">
        <label
          htmlFor="profile-picture-add"
          className="file-adder"
          name="images"
        >
          <img
            src={editImg}
            alt=""
            className="profile-type-icon"
          />

          <input
            type="file"
            id="profile-picture-add"
            name="image-files"
            accept="image/*"
            className="files-input"
          />
        </label>
        <button></button>
      </div>
      <div className="profile-picture__picture none">
        <img src={userImg} alt="" className="no-picture" />
      </div>
    </div>
  );
}
