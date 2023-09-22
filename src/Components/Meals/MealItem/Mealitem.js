import React from "react";
import "./Mealitem.css";
import MealitemForm from "./MealitemForm";
export default function Mealitem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealitemForm />
      </div>
    </li>
  );
}
