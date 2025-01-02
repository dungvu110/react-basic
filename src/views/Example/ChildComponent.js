import React from "react";
/**
 * used through another component
 * truyen theo props tu tren xuong duoi
 */

class ChildComponent extends React.Component {       //class (stateful) component

    state = {
        showJobs: false,
    }

    handleShowJobs = () => {
        this.setState({
            showJobs: true,
        })
    }

    handleHideJobs = () => {
        this.setState({
            showJobs: false,
        })
    }

    render() {

        let { arrJobs } = this.props;  //chi su dung duoc khi ten bien = ten key cua object
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';

        return (
            <>
                {/* conditional output, show/hide buttons */}
                {!showJobs ?
                    <div><button onClick={() => this.handleShowJobs()}>Show</button></div>
                    :
                    <>
                        <div><button onClick={() => this.handleHideJobs()}>Hide</button></div>
                        <div className="job-lists">
                            {
                                //ham lap map
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - ${item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    }
}

// const ChildComponent = (props) => {     //function (stateless) component
//     let { arrJobs } = props

//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     //ham lap map
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;