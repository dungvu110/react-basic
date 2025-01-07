import React from "react";
import './Nav.scss';
import { Link, NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            /** NavLink ho tro activeClassName
             * exact={true} de xac dinh chinh xac duong dan "/"
             */
            <div className="topnav">
                <NavLink activeClassName="active" to="/" exact={true}>Home</NavLink>
                <NavLink activeClassName="active" to="/todo">Todos</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
                <NavLink activeClassName="active" to="/user">Users</NavLink>
            </div>
        )
    }
}

export default Nav;