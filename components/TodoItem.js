const { InputField } = window.App;

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { editable: false };
    this.toggleEditable = this.toggleEditable.bind(this); // React 不會自動幫你綁定 this 到這 mothod 裡面，需手動綁定
  }

  toggleEditable() {
    this.setState({ editable: !this.state.editable });
  }

  render() {
  	return this.state.editable ? 
      this.renderEditMode() : 
      this.renderViewMode();
  }

  renderViewMode() {
    const { 
      title, 
      completed,
      onToggle,
      onDelete
    } = this.props;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={completed}
          onChange={() => onToggle && onToggle(!completed)}/>
        <span onDoubleClick={this.toggleEditable}>{title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </div>
    );
  }

  renderEditMode() {
    const { title, onUpdate } = this.props;
    return (
      <InputField
        autoFocus
        placehilder="編輯待辦項目"
        value={title}
        onBlur={this.toggleEditable}
        onKeyDown={
          (e) => {
            if (e.keyCode === 27) {
              e.preventDefault(); // 讓這事件不會再往下傳遞
              this.toggleEditable();
            }
          }
        }
        onSubmitEditing={(content) => {
          onUpdate && onUpdate(content);
          this.toggleEditable();
        }}
      />
    );
  }

}

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onToggle: React.PropTypes.func,
  onUpdate: React.PropTypes.func,
  onDelete: React.PropTypes.func
}

window.App.TodoItem = TodoItem;