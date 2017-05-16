export default function reducer(state = {
    lesson: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_LESSON": {
            return { ...state, fetching: true }
        }
        case "FETCH_LESSON_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_LESSON_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                lesson: action.payload,
            }
        }
    }
    return state;
}