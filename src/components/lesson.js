import React from "react";
import ReactMarkdown from 'react-markdown';
import { connect } from "react-redux";
import { fetchLesson } from "../actions/lessonActions";
import { Link } from "react-router-dom";
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class Lesson extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.dispatch(fetchLesson(this.props.match.params.id));
    }

    render() {
        const { lesson } = this.props;
        console.log(lesson)

        var handleClick = function (id, lesson) {
            lesson.completed = true;
            axios.put(`http://oca-sebulba.herokuapp.com/api/lessons/${id}`, lesson)
                .then(response => { })
                .catch(err => Promise.reject(err));
        }

        return (
            <div style={{ width: '90%', fontFamily: 'helvetica', color: '#A9A9A9', fontSize: '1em', margin: 'auto', }}>
                <ReactMarkdown source={lesson.markdown} />
                <Link to={`/contents`} style={{ margin: 5 }}>
                    <RaisedButton label="Submit" primary={true} onClick={handleClick(lesson._id, lesson)} />
                </Link>
                <Link to={`/contents`} style={{ margin: 5 }}>
                    <RaisedButton label="Back" primary={true} />
                </Link>
            </div>
        )
    }
};

function mapStateToProps(store) {
    return {
        lesson: store.lesson.lesson,
        lessonFetched: store.lesson.fecthed
    };
};

export { Lesson };
export default connect(mapStateToProps)(Lesson);
