import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CurrentReducer } from "./reducer/weatherReducer";

const middleware = [thunk]

const reducer = combineReducers({
    weatherData: CurrentReducer
})


const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store