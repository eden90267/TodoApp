class TodoItem extends React.Component {
  // ES7，可以在類別中使用 static 宣告 propTypes
  // static propTypes = {
  //   title: React.PropTypes.string.isRequired,
  //   completed: React.PropTypes.bool.isRequired
  // };

  // static defaultProps = {
  //   title: 'Item'
  // };

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

TodoItem.propTypes = { // ES6的宣告方式
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}

window.App.TodoItem = TodoItem;