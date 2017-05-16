import React from "react";
import ReactMarkdown from 'react-markdown';
import { connect } from "react-redux";
import { fetchLesson } from "../actions/lessonActions";
import { Link } from "react-router-dom";
import axios from "axios";

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
                .catch(err => Promise.reject(err))
        }

        return (
            <div>
                <ReactMarkdown source={lesson.markdown} />
                <Link to={`/contents`} >
                    <button onClick={handleClick(lesson._id, lesson)}>Complete!</button>
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
