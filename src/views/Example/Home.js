import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color.js";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
        //chuyen huong sang todo sau 3 giay
    }

    render() {
        console.log('>>> check home props:', this.props)
        return (
            <div>Hello World from Home Page</div>
        )
    }
}

//HOC: higher order component
export default withRouter(Home);
// export default Color(Home);