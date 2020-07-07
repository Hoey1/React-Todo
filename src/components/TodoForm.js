import React from "react";

class TodoForm extends React.Component {
  // CCR
  // Class
  // Constructor
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    // update State w/ each keystroke
    this.setState({
      item: e.target.value,
    });
  };

  // Class Prop Submit FORM
  // Create function to handle the form submit
  // inside that function, call the addItem function from props
  // and pass in the item state property
  handleSubmit = (e) => {
    // don't refresh page
    e.preventDefault();
    this.props.addItem(this.state.item);
    this.setState({
      item: "",
    });
  };

  // Render
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button type="submit"> Add </button>
      </form>
    );
  }
}

export default TodoForm;
