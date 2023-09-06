const redux = require('redux');

// 1. Adding an action

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        default:
            return state
    }
}

const store = redux.createStore(counterReducer);

console.log("Initial state --> " ,store.getState());

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState) // this subscription is now executed anytime the state change after the first initialization (2 times cause we dispatched twice the action)
}

store.subscribe(counterSubscriber);


// dispatching action twice
store.dispatch({type: 'increment'})
store.dispatch({type: 'increment'})

