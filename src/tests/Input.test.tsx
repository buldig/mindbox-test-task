import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TodoInput from "../components/TodoInput/TodoInput";
import store from "../store/store";

test("Input renders without crashing and contains placeholder which has focus on mount", () => {
    render(
        <Provider store={store}>
            <TodoInput />
        </Provider>
    );
    const inputField = screen.getByPlaceholderText("What needs to be done?");
    expect(inputField).toHaveFocus();
});
