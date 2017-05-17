import React from "react";
import { connect } from "react-redux";
import { fetchContents, nextStep } from "../actions/contentActions";
import { Link } from "react-router-dom";
import { Lesson } from "./lesson";

class Contents extends React.Component {
    constructor() {
        super();
   
    }

    componentWillMount() {
        this.props.dispatch(fetchContents());
    }

    render() {
        const { content } = this.props;
        var lessonCheck = []
        for (var i = 0; i < content.length; i++) {
            if (content[i].completed === true || i === 0) {
                lessonCheck.push(content[i]);
            } 
            if (content[i].completed === true && content[i+1].completed === false) {
                lessonCheck.push(content[i+1])
            } 
        }

        console.log(lessonCheck);
        var table = lessonCheck.map(item => <li key={item._id}><Link to={`/contents/${item._id}`} style={{ textDecoration: 'none', color: '#00BCD4', fontSize: 16 }}>{item.title}</Link></li>);

        return (<div style={{ width: '90%', fontFamily: 'helvetica', color: '#A9A9A9', fontSize: '1em', margin: 'auto', }}>
            <h3>Projects:</h3>
            <ol>{table}</ol>
        </div>);
    };
};

function mapStateToProps(store) {
    return {
        content: store.content.content,
        contentFetched: store.content.fecthed,
    };
};

export { Contents };
export default connect(mapStateToProps)(Contents);
