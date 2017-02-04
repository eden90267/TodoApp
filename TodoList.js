const { TodoItem } = window.App;

class TodoList extends React.Component {
	render () {
		return (
			<ul>
			  <TodoItem title="item1" completed={true} />
			  <TodoItem title="item2" completed={false} />
			  <TodoItem title="item3" completed={false} />
			</ul>
		);
	}
}

window.App.TodoList = TodoList;