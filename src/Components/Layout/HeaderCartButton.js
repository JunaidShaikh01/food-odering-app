import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton(props) {
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className="badge"> 3</span>
    </button>
  );
}
