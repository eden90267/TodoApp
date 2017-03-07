const { TodoItem } = window.App;

class TodoList extends React.Component {
	render () {
		const { 
			todos,
			onToggleTodo,
			onUpdateTodo,
			onDeleteTodo
		} = this.props;
		const elements = todos.map((todo) => (
			<li key={todo.id}>
			  <TodoItem
			    title={todo.title}
			    completed={todo.completed}
			    onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
			    onUpdate={(value) => onUpdateTodo && onUpdateTodo(todo.id, value)}
			    onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
			  />
			</li>
		));
		return (
			<ul>{elements}</ul>
		);
	}
}

TodoList.propTypes = {
	todos: React.PropTypes.array,
	onToggleTodo: React.PropTypes.func,
	onUpdateTodo: React.PropTypes.func,
	onDeleteTodo: React.PropTypes.func
}

TodoList.defaultProps = {
	todos: []
}

window.App.TodoList = TodoList;