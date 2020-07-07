import React from "react";
// import ReactDOM from "react-dom";
// import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "../src/components/styles.css";

const task = [
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
  {
    task: "Pickup Harper",
    id: 102,
    completed: false,
  },
  {
    task: "Go To The Beach",
    id: 103,
    completed: false,
  },
  {
    task: "Make Dinner",
    id: 104,
    completed: false,
  },
  {
    task: "Read",
    id: 105,
    completed: false,
  },
];

class App extends React.Component {
  // Constructor with State
  constructor() {
    super();
    // initialize state object
    this.state = {
      task: task,
    };
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // pass additem to ListForm as a propp
  addItem = (itemName) => {
    const newItem = {
      task: itemName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      task: [...this.state.task, newItem],
    });
  };

  toggleItem = (itemId) => {
    this.setState({
      task: this.state.task.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };

  // clearCompleted = (e) => {
  //   e.preventDefault();
  //   const clearedArray = this.state.task.filter((task) => {
  //     return task.completed === false;
  //   });
  //   this.setState({
  //     task: clearedArray,
  //   });
  // };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      task: this.state.task.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          toggleItem={this.toggleItem}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

// clearCompleted = (toggleItem) => {

// }

// clearCompleted = e => {
//   e.preventDefault();
//   const stateSpread = [...this.state.task];
//   const newState = [];

// }

// clearCompleted = (e) => {
//   e.preventDefault();

//   const stateCopy = [...this.state.task];
//   const newState = [];
//   stateCopy.map((item) => {
//     if (item.completed === false) {
//       newState.push(item);
//     }
//     this.setState({ task: newState });
//   });
// };
