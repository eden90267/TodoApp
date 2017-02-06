class InputField extends React.Component {
	render () {
		return <input type="text" {...this.props} />;
	}
}

window.App.InputField = InputField;