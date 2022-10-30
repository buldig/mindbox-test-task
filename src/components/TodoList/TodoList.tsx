import React, {FC} from "react";
import TodoItem from "../TodoItem/TodoItem";

interface ITodo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
