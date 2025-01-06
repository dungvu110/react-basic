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
            { id: "job1", title: 'developer', salary: '500' },
            { id: `job2`, title: 'tester', salary: '400' },
            { id: 'job3', title: 'manager', salary: '1000' },
        ]
    }

    //truyen function tu cha sang con (AddComponent)
    addNewJob = (job) => {
        // let currentJob = this.state.arrJobs
        // currentJob.push(job)
        this.setState({
            // arrJobs: currentJob,
            arrJobs: [...this.state.arrJobs, job],
            /**
             * [] tao 1 arr de cap nhat vao arrJobs
             * ... toan tu copy, copy toan bo phan tu trong this.state.arrJobs
             */
        })
    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        //loc tcc phan tu, tra ve nhung phan tu co id != job.id
        this.setState({
            arrJobs: currentJob,
        })
    }

    componentDidMount() {
        console.log(">> run component did mount")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(">> run component did upadate", "previous state:", prevState, "current state:", this.state)
    }

    render() {
        console.log(">> CALL RENDER:", this.state)
        return (
            <>
                <p>
                    Getting started with React
                </p>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />
            </>
        )
    }
}

export default MyNewComponent;