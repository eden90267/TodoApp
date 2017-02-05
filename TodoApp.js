const {
	TodoHeader,
	InputField,
	TodoList,
} = window.App;

class TodoApp extends React.Component {
	render () {
		return (
			<div>
			  <TodoHeader title="我的待辦清單" username="Eden" todoCount={99} />
			  <InputField placeholder="新增待辦事項" />
			  <TodoList />
			</div>
		);
	}
}

window.App.TodoApp = TodoApp;