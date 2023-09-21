import React from "react";
import "./HeaderCartButton.css";
import CartIcon from "../Cart/CartIcon";

export default function HeaderCartButton() {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className="bedge"> 3</span>
    </button>
  );
}
