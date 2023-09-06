// The reducer lives in its own file for easier file management

const initialState = {
    counter: 0,
    isHidden: false,
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'increment':
            state.counter++; // WRONG! You should not mutate the state! This can lead to bugs, unpredictable behavior, and hard debugging.
            return state;

        case 'incrementBy':
            return {
                ...state,
                counter: state.counter + action.payload
            }

        case 'decrement':
            state.counter--; // ALSO WRONG! 
            return {
                ...state,
                counter: state.counter
            }

        case 'hideCounter':
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state
    }
}

export { counterReducer };