export default function reducer(state={
    content: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_CONTENT": {
            return { ...state, fetching: true }
        }
        case "FETCH_CONTENT_REJECTED": {
            return { ...state, fetching: false, error: action.payload }
        }
        case "FETCH_CONTENT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                content: action.payload
            }
        }
    }
    return state;
}