import React from "react";

const Form = (props) => {
  return (
    <form>
      <input
        id="newtask"
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        onChange={props.onInputChange}
        name="task"
        type="text"
        placeholder="Add To-Do's"
      />
      <button id="submit" onClick={props.onSubmit}>
        Add!
      </button>
      <button id="clear" onClick={props.onClear}>
        Clear Completed
      </button>
    </form>
  );
};

export default Form;
