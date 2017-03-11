const { Provider } = ReactRedux;
const { createStore, combineReducers, applyMiddleware } = Redux;
const { TodoApp, reducers } = window.App;

// ({dispatch, getState}) => (nextDispatch) => dispatch'
// Middleware 目的是在 dispatch 前做一些事情，所以必須在最後回傳新的dispatch'函數

// Middleware的格式為：
// var middleware = function({dispatch, getState}) {
// 	// 1. Middleware 回傳 dispatch
// 	return function dispatchCreator(nextDispatch) {
// 		// 2. dispatchCreator 回傳 dispatch
// 		return function dispatch(action) {
// 			// 1. 可以做 log，或判斷 action 型別做對應的事情
// 			// 2. 可以判斷是否要將 action 傳給下一個 middleware
// 			//    如果要，可以使用 nextDispatch 傳遞，如果不要，可以不做任何事
// 			// 3. 可以判斷是否要調用最上層的 dispatch 傳遞新的 action
// 		}
// 	}
// }
var trunkMiddleware = ({dispatch, getState}) => (next) => (action) => {
	if (typeof action === 'function') {
		return action(dispatch, getState);
	}
	return next(action);
}

const composedReducer = combineReducers(reducers);
const store = createStore(
	composedReducer,
	applyMiddleware(trunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
	<TodoApp />
  </Provider>,
  document.getElementById('app')
);