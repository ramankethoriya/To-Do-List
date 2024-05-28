import { useContext, useState } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../../Store/TodoItemsContext";

function AddTodo() {

  const obj = useContext(TodoItemsContext);
  const AddItem = obj.AddItem;

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    AddItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn1"
            onClick={handleAddButtonClicked}
          >
            <MdAddBox />

          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
