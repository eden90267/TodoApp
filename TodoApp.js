// 1. 新增一個繼承 React.Component 的子類別
class TodoApp extends React.Component {
	// 2. 必須實作 render 方法
	//    透過該方法回傳的元素，讓 React 了解要如何繪製該元件在頁面上
	render () {
		return <div>TodoApp</div>;
	}
}


// 建立元件的三種方法
// 1. 使用 ES6 的類別 (classes)

// class TodoApp extends React.Component {
// 	render() {
// 		return <div>TodoApp</div>;
// 	}
// }


// 2. 使用 React.createClass API，通常用於 ES5 中

// const TodoApp = React.createClass({
// 	render() {
// 		return <div>TodoApp</div>;
// 	}
// });


// 3. 使用 function，通常用在元件只需要定義 render 方法時

// const TodoApp = function () {
// 	return <div>TodoApp</div>;
// }






// 3. 將元件類別 (TodoApp) 定義在window.App 下：
//    這可以讓其他 JS 檔使用該元件類別
window.App.TodoApp = TodoApp;