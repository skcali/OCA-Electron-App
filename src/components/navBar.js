import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <h1>Nav Bar</h1>
                {this.props.children}
                <Link to="dashboard">Home</Link>
                <Link to="contents">Table of Contents</Link>
            </div>
        );
    }
}

export default NavBar;
