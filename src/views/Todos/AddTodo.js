import React from "react";

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleAddTodo = (event) => {
        event.preventDefault()

        if (!this.state.title) {
            alert("Missing parameter");
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        }

        this.props.addNewTodo(todo)

        this.setState({
            title: '',
        })
    }

    render() {
        let { title } = this.state;

        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => { this.handleChangeTitle(event) }}
                />
                <button className="add" type="button"
                    onClick={(event) => this.handleAddTodo(event)}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;