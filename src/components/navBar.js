import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div style={{ width: '100%', background: "#00BCD4" }}>
                <Tabs value={this.state.value} onChange={this.handleChange} style={{ width: 200 }}>
                    <Tab containerElement={<Link to="/dashboard" />} label="Home" value="a" style={{ width: 100 }}></Tab>
                    <Tab containerElement={<Link to="/contents" />} label="Projects" value="b" style={{ width: 100, align: 'right' }}></Tab>
                </Tabs>
            </div>
        );
    }
}

export default NavBar;

