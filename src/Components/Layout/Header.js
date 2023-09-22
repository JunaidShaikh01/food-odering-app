/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import image from "../../assests/meals.jpg";
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";
export default function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={image} alt="Error While Loading The Image" />
      </div>
    </div>
  );
}
