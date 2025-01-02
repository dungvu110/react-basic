import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

/**
 * form
 * onChange, onClick
 */

class MyNewComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 1, title: 'developer', salary: '500' },
            { id: 2, title: 'tester', salary: '400' },
            { id: 3, title: 'manager', salary: '1000' },
        ]
    }

    render() {

        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyNewComponent;