const { TodoItem } = window.App;

class TodoList extends React.Component {
	render () {
		const { todos } = this.props;
		const elements = todos.map((todo) => (
			<li key={todo.id}>
			  <TodoItem
			    title={todo.title}
			    completed={todo.completed}
			  />
			</li>
		));
		return (
			<ul>{elements}</ul>
		);
	}
}

TodoList.propTypes = {
	todos: React.PropTypes.array
}

TodoList.defaultProps = {
	todos: []
}

window.App.TodoList = TodoList;