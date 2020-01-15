import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleForm() {
    this.setState({
      task: this.state.task,
      isEditing: !this.state.isEditing
    });
  }
  handleUpdate(event) {
    event.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({
      isEditing: false
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
    let result;
    //console.log(this.state.task)
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
            className="form-control"
              type="text"
              onChange={this.handleChange}
              value={this.state.task}
              id="task"
              name="task"
            />
            <button className="ml-3 btn btn-success btn-md">Update</button>
          </form>
        </div>
      );
    } else
      result = ( 
        <div>
          <li className="list-group-item">
            <i className="fa fa-list mr-3"></i>
            {this.props.task}
            <span>
              <i
                className="fa fa-pencil ml-3 mr-2"
                onClick={this.toggleForm}
              ></i>
            </span>
            <span>
              <i className="fa fa-trash" onClick={this.props.removeTodo}></i>
            </span>
          </li>
        </div>
      );

    return result;
  }
}
export default Todo;
