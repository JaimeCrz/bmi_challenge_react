import React from "react";

const Form = props => {

  let WeightPlaceHolder = props.systemSelection == "metric" ? "Weight in Kg" : "Weight in lbs"
  let HeightPlaceHolder = props.systemSelection == "metric" ? "Height in cm" : "Height in inch"

  return (
    <form onSubmit={props.onSubmitHandler}>
      <select id="select-method" name="systemSelection"
        onChange={props.onChangeHandler}>
        <option value="metric">metric</option>
        <option value="imperial">imperial</option>
      </select>
      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder={WeightPlaceHolder}
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder={HeightPlaceHolder}
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;