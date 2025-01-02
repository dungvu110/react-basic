import React from "react";
import ChildComponent from "./ChildComponent";

/**
 * form
 * onChange, onClick
 */

class MyFormComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value,
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value,
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
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        placeholder="Roy"
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        placeholder="Yamaha"
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <br />
                    <input type="button" value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <ChildComponent name={'1stChild'} age={'22'} />
                <ChildComponent name={'2ndChild'} age={'11'} />
            </>
        )
    }
}

export default MyFormComponent;