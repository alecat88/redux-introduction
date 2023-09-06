// The reducer lives in its own file for easier file management

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'incrementBy':
            return {
                counter: state.counter + action.payload
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export { counterReducer };