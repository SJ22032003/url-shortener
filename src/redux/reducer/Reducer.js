import { GET_DATA_SUCCESS } from "../ActionType";

const initialState = {
    data: []
}

const Reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_DATA_SUCCESS:
            newState = {
                ...state,
                data: action.payload
            }
            return newState;
        default:
            return state
    }
}

export default Reducer