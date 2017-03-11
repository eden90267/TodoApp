const { connect } = ReactRedux;

const {
  TodoActions,
  InputField
} = window.App;

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        // createTodo 函數改由父元件來
        onSubmitEditing={this.props.createTodo}
      />
    );
  }
}
// connect()的：
// 第一參數是 mapStateToProps
// 第二參數是 mapDispatchToProps，可直接給Action Create函數名稱，並定義值為 props 的屬性名稱；
//           他會幫你將 createTodo 轉成 (...args) => store.dispatch(createTodo(...args))，
//           讓你調用該函數同時做兩件事，調用Action Creator 和 dispatch action 物件。
window.App.CreateTodoFieldContainer = connect(
  undefined,
  { createTodo: TodoActions.createTodo }
)(CreateTodoFieldContainer);
