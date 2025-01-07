import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    state = {
        listUsers: [],
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=1')
        //     .then(res => {
        //         console.log('>>> check res:', res.data.data)
        //     })

        //su dung async - await de xu ly bat dong bo
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [],
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`);
        //day nguoc userid ve route tren App.js
    }

    render() {
        let { listUsers } = this.state

        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                    {
                        listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);