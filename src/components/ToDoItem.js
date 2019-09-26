import React from "react";

class ToDoItem extends React.Component {
  handleKeyUp = e => {
    //Removes focus when ENTER is pressed
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };
  render() {
    const todo = this.props.data;
    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            />
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            >
              &nbsp;
            </label>
          </div>
        </td>
        <td className="col-1">
          <input
            className="form-control"
            type="text"
            value={todo.text}
            onChange={e => {
              this.props.editToDoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleKeyUp(e);
            }}
          />
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeToDo(todo.uuid)}
          />
        </td>
      </tr>
    );
  }
}

export default ToDoItem;
