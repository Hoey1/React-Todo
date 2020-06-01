import React from "react";
import Form from "./components/TodoForm";
import List from "./components/TodoList";

const todolist = [
  {
    task: "Check On Bees 🐝",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todolist,
    }; //end of state
  } //end of constructor
  newTask = {
    task: "",
    id: Date.now(),
    completed: false,
  };
  onFocus = (event) => {
    event.target.placeholder = "";
  };
  onBlur = (event) => {
    event.target.placeholder = "Add To-Do's";
  };

  onComplete = (event) => {
    event.stopPropagation();
    const name = event.target.className;
    const index = this.state.todolist.findIndex(
      (element) => element.task === name
    );
    const statecopy = [...this.state.todolist];
    statecopy[index] = {
      ...statecopy[index],
      completed: !statecopy[index].completed,
    };
    this.setState({ todolist: statecopy });
    if (statecopy[index].completed === false) {
      event.target.style.textDecoration = "none";
    } else if (statecopy[index].completed === true) {
      event.target.style.textDecoration = "line-through";
    }
  };

  onInputChange = (event) => {
    this.newTask.task = event.target.value;
  };

  onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ todolist: [...this.state.todolist, this.newTask] });
    this.newTask = {
      task: "",
      id: Date.now(),
      completed: false,
    };

    document.querySelector("#newtask").value = "";
  };
  onClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const statecopy = [...this.state.todolist];
    const newstate = [];
    statecopy.map((item) => {
      if (item.completed === false) {
        newstate.push(item);
      }
      this.setState({ todolist: newstate });
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <List state={this.state} onComplete={this.onComplete} />
        <Form
          onClear={this.onClear}
          newTask={this.newTask}
          onInputChange={this.onInputChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

export default App;
