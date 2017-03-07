const {
	TodoActions,
	TodoStore,
	TodoHeader,
	InputField,
	TodoList,
} = window.App;

class TodoApp extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: []
		}
	}

	componentDidMount() { // 第一次渲染後，使用者看到空的頁面，然後調用componentDidMount()
		TodoActions.loadTodos();
		this._removeChangeListener = TodoStore.addChangeListener(() => {
			this.setState({todos: TodoStore.getAll()});
		});
	}

	componentWillUnmount() {
		this._removeChangeListener();
	}

	render () {
		const { todos } = this.state;
		return (
			<div>
			  <TodoHeader 
			    title="我的待辦清單" 
			    username="Eden" 
			    todoCount={todos.filter((todo) => !todo.completed).length} />
			  <InputField 
			    placeholder="新增待辦事項"
			    onSubmitEditing={TodoActions.createTodo}
			  />
			  <TodoList 
			    todos={todos}
			    onToggleTodo={TodoActions.toggleTodo}
			    onUpdateTodo={TodoActions.updateTodo}
			    onDeleteTodo={TodoActions.deleteTodo}
			  />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;