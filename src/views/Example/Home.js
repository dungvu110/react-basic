import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/RandomColor.js";
import roy from '../../assests/images/RoyTGE.jpg';

import { connect } from 'react-redux';  //HOC

class Home extends React.Component {
    componentDidMount() {
        //     setTimeout(() => {
        //         this.props.history.push('/todo')
        //     }, 3000)
        //     //chuyen huong sang todo sau 3 giay, su dung withRouter
    }

    handleDeleteReduxUser = (user) => {
        // console.log(">>> Delete user?", user);
        this.props.deleteUserRedux(user);
    }

    handleAddUserRedux = () => {
        // console.log(">>> ADD");
        this.props.addUserRedux();
    }

    render() {
        // console.log('>>> check HOME props:', this.props)
        let listUsers = this.props.dataRedux;

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
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id}>
                                        {index + 1} - {item.name} <></>
                                        <button type="button"
                                            onClick={() => this.handleDeleteReduxUser(item)}
                                        >x</button>
                                    </div>
                                </>
                            )
                        })
                    }
                    <div>
                        <button type="button" onClick={() => this.handleAddUserRedux()}>Add Random</button>
                    </div>
                </div>
            </>
        )
    }
}

//Redus's state
//ket not bang cach export default connect(mapStateToProps)...
const mapStateToProps = (state) => {
    //tra ve du lieu tu redux
    return ({
        dataRedux: state.users
    })
}

//ket noi voi redux qua props, su dung thong qua this.props.deleteUserRedux(user)
const mapDispatchToProps = (dispatch) => {
    return ({
        deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
        addUserRedux: () => dispatch({ type: "CREATE_USER" }),
    })
}

// export default Home;

//HOC: higher order component
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));