class TodoHeader extends React.Component {
	render () {
		const { name, username, todoCount } = this.props;
		return (
			<div>
			  <h1>{name}</h1>
			  <span>哈囉，{username}：你尚有{todoCount}項未處理</span>
			</div>
		);
	}
}

window.App.TodoHeader = TodoHeader;