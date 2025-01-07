import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/RandomColor.js";
import roy from '../../assests/images/RoyTGE.jpg';

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    //     //chuyen huong sang todo sau 3 giay, su dung withRouter
    // }

    render() {
        console.log('>>> check home props:', this.props)
        return (
            <>
                <div>Hello World from Home Page</div>
                <div>
                    <img src={roy} style={{
                        height: '200px', width: '200px',
                        marginTop: '20px',
                        borderRadius: '50%'
                    }} />
                </div>
            </>
        )
    }
}

//HOC: higher order component
export default Home;
// export default withRouter(Home);
// export default Color(Home);