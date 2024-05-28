import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../../Store/TodoItemsContext";

const TodoItems = () => {
  const obj = useContext(TodoItemsContext);
  const todoItems = obj.todoItems;
  const DeleteItem=obj.DeleteItem;
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={DeleteItem}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
