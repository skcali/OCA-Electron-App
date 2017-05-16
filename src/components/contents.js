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
        var table = lessonCheck.map(item => <li key={item._id}><Link to={`/contents/${item._id}`}>{item.title}</Link></li>);

        return (<div>
            <h1>Table of Contents</h1>
            {table}
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
