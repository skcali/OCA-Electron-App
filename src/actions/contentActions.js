import axios from "axios";

export function fetchContents() {
    return {
        type: "FETCH_CONTENT",
        payload: axios.get(`http://oca-sebulba.herokuapp.com/api/lessons/`)
        .then(response => response.data)
        .catch(err => Promise.reject(err))
    }     
}
