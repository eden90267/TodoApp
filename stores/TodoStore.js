const {
	ActionTypes,
	AppDispatcher
} = window.App;

const CHANGE_EVENT = 'CHANGE';

const _emitter = new EventEmitter();

let _todos = [];

const _createTodo = (todos, title) => {
	todos.push({
		id: todos[todos.length - 1].id + 1,
		title,
		completed: false
	});
	return todos;
}

const _toggleTodo = (todos, id, completed) => {
	const target = todos.find((todo) => todo.id === id);
	if (target) target.completed = completed;
	return todos;
}

const _updateTodo = (todos, id, title) => {
	const target = todos.find((todo) => todo.id === id);
	if (target) target.title = title;
	return todos;
}

const _deleteTodo = (todos, id) => {
	const idx = todos.findIndex((todo) => todo.id === id);
	if (idx !== -1) todos.splice(idx, 1);
	return todos;
};

window.App.TodoStore = {
	getAll() {
		return _todos;
	},
	addChangeListener(callback) {
		_emitter.on(CHANGE_EVENT, callback);
		return () => _emitter.removeListener(CHANGE_EVENT, callback);
	},
	// register()會回傳token，可以用在當 Store 有依賴關係，必須調整 dispatch 順序時。
	// ex: Dispatcher.waitFor([token1, token2])
	dispatchToken: AppDispatcher.register((action) => {
		switch (action.type) {
			case ActionTypes.LOAD_TODOS_SUCCESS:
			    _todos = action.todos;
			    break;
			case ActionTypes.CREATE_TODO:
			    _todos = _createTodo(_todos, action.title);
			    break;
			case ActionTypes.UPDATE_TODO:
			    _todos = _updateTodo(_todos, action.id, action.title);
			    break;
			case ActionTypes.TOGGLE_TODO:
			    _todos = _toggleTodo(_todos, action.id, action.completed);
			    break;
			case ActionTypes.DELETE_TODO:
			    _todos = _deleteTodo(_todos, action.id);
			    break;
			default:
			    break;
		}
		_emitter.emit(CHANGE_EVENT);
	})
}