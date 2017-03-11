const { connect } = ReactRedux;

const {
  TodoActions,
  TodoStore,
  TodoList
} = window.App;

class TodoListContainer extends React.Component {
  static getStores() {
    return [ TodoStore ];
  }
  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(),
    };
  }
  render() {
    return (
      <TodoList
        todos={this.props.todos}
        onUpdateTodo={this.props.updateTodo}
        onToggleTodo={this.props.toggleTodo}
        onDeleteTodo={this.props.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = connect(
  (state) => ({ todos: state.todos }),
  {
    updateTodo: TodoActions.updateTodo,
    toggleTodo: TodoActions.toggleTodo,
    deleteTodo: TodoActions.deleteTodo
  }
)(TodoListContainer);
