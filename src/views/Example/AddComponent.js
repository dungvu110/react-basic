import React from "react";

/**
 * chia cat component, chuyen form tu MyNewComponet
 */

class AddComponent extends React.Component {

    state = {
        titleJob: '',
        salary: '',
    }

    handleChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value,
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">> Submit:", this.state)
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job title:</label><br />
                    <input
                        type="text"
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
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