import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/todosActions";

class Todos extends Component {
  iterateTodos(todos) {
    return todos.map(todo => (
      <li key={todo.id}>
        <a
          href={`https://jsonplaceholder.typicode.com/todos/${todo.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {todo.title}
        </a>
      </li>
    ));
  }

  render() {
    const isLoading = false;
    const { requestTodos, todos } = this.props;

    return (
      <div className="todosList">
        <button className="btn" disabled={isLoading} onClick={requestTodos}>
          {isLoading ? "Loading..." : "Get Todos"}
        </button>
        <h3>Todos</h3>
        <ul>{todos.length > 0 && this.iterateTodos(todos)}</ul>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  todos: store.todos
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
