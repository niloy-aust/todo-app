import React, { Component } from 'react'
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {todos:[]};
        this.create = this.create.bind(this);
         this.update = this.update.bind(this);
    }
    create(newTodo){
        this.setState({
            todos: [...this.state.todos,newTodo]
        })
    }

    remove(id){
        const todos = [...this.state.todos];
        const todo = todos.filter(t => t.id !== id)
        this.setState({todos:todo});
    }
    update(id,updatedTask){
        const updatedTodos = this.state.todos.map(todo =>
            {
                if(todo.id === id) return {...todo,task:updatedTask}
                return todo;
            })
        this.setState({todos:updatedTodos});
    }

    render(){
        const h1 = {
            'textAlign':'center'
        }
        
        const todos = this.state.todos.map(todo=>{
            return <Todo key= {todo.id} id={todo.id} task={todo.task} removeTodo={()=>this.remove(todo.id)} updateTodo={this.update} />
        })
        return(
            <div>
                <h1 style={h1}>Todo List</h1>
                <NewTodoForm createTodo={this.create} />
                <ul className="list-group">{todos}</ul>
            </div>
        );
    }
}
export default TodoList;