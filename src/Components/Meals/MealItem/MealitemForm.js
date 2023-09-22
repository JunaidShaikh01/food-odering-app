import React from "react";
import "./MealitemForm.css";
import Input from "../../UI/Input";
export default function MealitemForm(props) {
  return (
    <form className="form">
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
    </form>
  );
}