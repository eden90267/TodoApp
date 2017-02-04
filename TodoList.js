const { TodoItem } = window.App;

class TodoList extends React.Component {
	render () {
		return (
			<ul>
			  <TodoItem />
			  <TodoItem />
			  <TodoItem />
			</ul>
		);
	}
}

window.App.TodoList = TodoList;