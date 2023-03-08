import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./Reducer/restaurantReducer";

const reducers = combineReducers({
    restaurantListData: restaurantListReducer // data from reducer
})
const middleware = [thunk];
const store = createStore(reducers, applyMiddleware(...middleware))

export default store;
