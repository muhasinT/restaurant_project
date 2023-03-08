import { RESTAURANT_LIST_REQUEST, RESTAURANT_LIST_SUCCESS, RESTAURANT_LIST_FAIL } from "../Constant/restaurantConstant";

export const restaurantListReducer = (state = { myList: [] }, action) => {

    switch (action.type) {
        case RESTAURANT_LIST_SUCCESS:
            return (
                { myList: action.payload }
            )

        case RESTAURANT_LIST_FAIL:
            return (
                { myList: action.payload }
            )

            default:
                return state
    }
    
   

}