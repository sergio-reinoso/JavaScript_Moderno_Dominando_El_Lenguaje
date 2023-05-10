import todoStore from "../stores/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";

const ElementsIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementsIDs.TodoList, todos );
    }

    //Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

}