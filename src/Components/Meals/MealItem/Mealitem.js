import React from "react";
import { useContext } from "react";
import "./Mealitem.css";
import MealitemForm from "./MealitemForm";
import CartContext from "../../../Store/Crat-context";

export default function Mealitem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHadler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealitemForm onAddToCart={addToCartHadler} />
      </div>
    </li>
  );
}
