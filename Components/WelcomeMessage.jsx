import { useContext } from "react";
import { TodoItemsContext } from "../../Store/TodoItemsContext";

const WelcomeMessage = () => {

  const obj=useContext(TodoItemsContext);
  const todoItems=obj.todoItems;
  return (todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>);
};

export default WelcomeMessage;
