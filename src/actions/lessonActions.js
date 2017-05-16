import axios from "axios";

export function fetchLesson(id) {
    return {
        type: "FETCH_LESSON",
        payload: axios.get(`http://oca-sebulba.herokuapp.com/api/lessons/${id}`)
        .then(response => response.data)
        .catch(err => Promise.reject(err))
    }     
}
