import React, {FC} from "react";
import "./TodoInput.scss";
import { useAppDispatch } from "../../hooks/hooks";
import { useState } from "react";
import { addTodo } from "../../store/reducers/todoReducer";

const TodoInput: FC<any> = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");

    return (
        <>
            <input
                type="text"
                className="todo-input"
                placeholder="What needs to be done?"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && value !== "") {
                        dispatch(addTodo(value));
                        setValue("");
                    }
                }}
            />
        </>
    );
};

export default TodoInput;
