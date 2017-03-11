const { connect } = ReactRedux;

const {
  TodoStore,
  TodoHeader
} = window.App;

class TodoHeaderContainer extends React.Component {
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
      <TodoHeader
        title="我的待辦清單"
        username="Jason"
        todoCount={this.props.todos.filter((todo) => !todo.completed).size}
      />
    );
  }
}

window.App.TodoHeaderContainer = connect(
  (state) => ({todos: state.todos})
)(TodoHeaderContainer);
