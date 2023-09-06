// The reducer lives in its own file for easier file management

const initialState = {
    counter: 0,
    isHidden: false,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state, // We need to take care of other values ("isHidden" in this case)
                counter: state.counter + 1
            }
        case 'incrementBy':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'hideCounter':
            return {
                ...state,  // We need to take care of other values ("counter" in this case)
                isHidden: !state.isHidden
            }
        default:
            return state
    }
}

export { counterReducer };