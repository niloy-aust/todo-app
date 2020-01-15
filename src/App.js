import React, { Component } from "react";
import TodoList from "./TodoList";
class App extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 card">
          <div className="card-body">
            <TodoList />
          </div>
        </div>
      </div>
    );
    }
}
export default App;
