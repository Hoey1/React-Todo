import React from "react";
// import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "../src/components/styles.css";

// CCR
// GroceryList = TodoList
// ListForm = TodoForm
// {nothing} = Todo => This is what will be brought in to desplay everything

const stuff = [
  {
    task: "Submit Retro",
    id: 100,
    completed: false,
  },
  {
    task: "Study",
    id: 101,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      task: stuff,
    };
  }

  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      purchased: false,
    };
    this.setState({
      stuff: [...this.state.stuff, newItem],
    });
  };

  toggleItem = (itemId) => {
    // loop through all tasks, find the one thats clicked
    // toggle the completed field for that item
    // else, leave the item untouched
    this.setState({
      stuff: this.state.stuff.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.purchased,
          };
        } else {
          return item;
        }
      }),
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList toggleItem={this.toggleItem} stuff={this.state.stuff} />
      </div>
    );
  }
}

export default App;
