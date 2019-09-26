import React from "react";

class ToDoForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const text = this.textInput.current.value.trim();
    console.log(text);
    this.props.addToDo(text);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Add a new todo item..."
          ref={this.textInput}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fas fa-plus" area-hidden="true" />
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;
