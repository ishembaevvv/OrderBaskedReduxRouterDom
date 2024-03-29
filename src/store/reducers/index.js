import { ADD_ORDER } from "../actions"

const defaultState = {
    order: [],
}

export const rootReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            return {...state, order: [...state.order, action.payload]};
        default:
            return state
    }
}