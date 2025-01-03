import React from "react";

/**
 * chia cat component, chuyen form tu MyNewComponet
 */

class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        if (!this.state.title || !this.state.salary) {
            alert("Missing parameter");
            return;
        }

        //goi function tu parent thong qua props
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary,
        })

        this.setState({
            title: '',
            salary: '',
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitle(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>
        )
    }
}

export default AddComponent;