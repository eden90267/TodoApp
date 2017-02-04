class TodoItem extends React.Component {
  render() {
  	const { title, completed } = this.props;
  	return (
  		<li>
			<input type="checkbox" checked={completed} />
			<span>{title}</span>
			<button>x</button>
	    </li>
  	);
  }
}

window.App.TodoItem = TodoItem;