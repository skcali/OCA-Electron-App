import { combineReducers } from "redux"

import content from "./contentsReducer"
import lesson from "./lessonReducer"

export default combineReducers({
    content,
    lesson,
})