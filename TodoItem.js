class TodoItem extends React.Component {
  render() {
  	return (
  		<li>
			<input type="checkbox" />
			    Item 1
			<button>x</button>
	    </li>
  	);
  }
}

window.App.TodoItem = TodoItem;