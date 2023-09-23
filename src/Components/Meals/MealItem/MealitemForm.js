import React from "react";
import { useRef, useState } from "react";
import "./MealitemForm.css";
import Input from "../../UI/Input";

export default function MealitemForm(props) {
  const [amountIsVlaid, setAmountIsValid] = useState(true);
  const amountinputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountinputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountinputRef}
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
      {!amountIsVlaid && <p>Please Enter A Valid Amount (1-5).</p>}
    </form>
  );
}
