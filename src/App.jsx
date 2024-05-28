import Heading from "../Components/Heading";
import AddTodo from "../Components/AddToDo";
import TodoItems from "../Components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeMessage from "../Components/WelcomeMessage";
import "./App.css";
import { useReducer } from "react";
import { TodoItemsContext } from "../../Store/TodoItemsContext";

const todoItemsReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

function App() {
  

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const AddItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };

    dispatchTodoItems(newItemAction);
  };

  const DeleteItem = (todoItemName) => {
    const deleteAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems: todoItems, AddItem: AddItem, DeleteItem: DeleteItem }}
    >
      <center className="todo-container">
        <Heading />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
