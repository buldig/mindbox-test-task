import React, {FC} from "react";
import "./TodoItem.scss";
import circle from "../../assets/circle.svg";
import checked from "../../assets/checked.svg";
import { useAppDispatch } from "../../hooks/hooks";
import { setCompleted } from "../../store/reducers/todoReducer";

interface TodoItemProps {
    id: string;
    text: string;
    completed: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ text, completed, id }) => {
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="todo-item">
                <img
                    src={completed ? checked : circle}
                    alt=""
                    className="todo-item__icon"
                    onClick={() => {
                        dispatch(setCompleted(id));
                    }}
                />
                <span
                    className={
                        completed
                            ? "todo-item__text completed"
                            : "todo-item__text"
                    }
                >
                    {text}
                </span>
            </div>
        </>
    );
};

export default TodoItem;
