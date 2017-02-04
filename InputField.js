class InputField extends React.Component {
	render () {
		const { placeholder } = this.props;
		return <input type="text" placeholder={placeholder} />;
	}
}

window.App.InputField = InputField;