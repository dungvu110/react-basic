import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
    state = {
        listTodos:
            [
                { id: 1, title: "Doing homework" },
                { id: 2, title: "Self-study" },
            ],
        editTodo: {}
    }

    addNewTodo = (newTodo) => {
        this.setState({
            listTodos: [...this.state.listTodos, newTodo],
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos
        currentTodo = currentTodo.filter(item => item.id !== todo.id)

        this.setState({
            listTodos: currentTodo,
        })
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let copyListTodos = [...listTodos];
            let objIndex = copyListTodos.findIndex((item => item.id === todo.id));

            copyListTodos[objIndex].title = editTodo.title;

            this.setState({
                listTodos: copyListTodos,
                editTodo: {},   //set lai thanh rong de chuyen tu input ve span sau khi save
            })
            return;
        }

        //edit
        this.setState({
            editTodo: todo,
        })
    }

    handleOnChangeEditTodo = (event) => {
        let copyEditTodo = { ...this.state.editTodo };
        copyEditTodo.title = event.target.value;
        this.setState({
            editTodo: copyEditTodo,
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>
                                            {index + 1} - {item.title} -
                                        </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} -
                                                    <input value={editTodo.title}
                                                        onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title} -
                                                </span>
                                            }
                                        </>

                                    }
                                    <button className="edit" type="button"
                                        onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'}
                                    </button>
                                    <button className="delete" type="button"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;