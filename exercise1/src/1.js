const redux = require('redux');

// 1. Simple setup

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer);

console.log("Initial state --> " ,store.getState()); // this will be { counter: 1 } because the reducer run one time when we initialize it

const counterSubscriber = () => {
    const latestState = store.getState(); // this code is not running cause the data subscribed never change after the initialization of the reducer
    console.log(latestState);
}

store.subscribe(counterSubscriber) // we don't execute the function, we just point at it

