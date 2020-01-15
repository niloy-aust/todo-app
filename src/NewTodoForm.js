import React, { Component } from "react";
import uuid from "uuid/v4";
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), isEditing: false });
    this.setState({
      task: ""
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="font-weight-bold className mb-4">
          <label htmlFor="task">
            <strong>New Todo</strong>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button className="btn btn-md btn-success mt-2">Add Todo</button>
        </form>
      </div>
    );
  }
}
export default NewTodoForm;
