import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    isHidden: false,
}

const counterSlice = createSlice({
    name: 'counterSliceName', // This is needed and can be anything
    initialState,
    reducers: { // we don't need action.type anymore, we don't need a conditional to understand what action to execute cause the toolkit does it for us
        increments: (state) => { 
            state.counter++; // we can change the state directly now cause the toolkit makes it temporarily immutable for us
        },
        incrementBy: (state, action) => {
            state.counter += action.payload;
        },
        decrements: (state) => {
            state.counter--;
        },
        hideCounter: (state) => {
            state.isHidden = !state.isHidden
        }
    }
})

export { counterSlice };

// These methods are created automaticaly from the toolkit
const increments = counterSlice.actions.increments 
const incrementBy = counterSlice.actions.incrementBy 
const decrements = counterSlice.actions.decrements 
const hideCounter = counterSlice.actions.hideCounter 

export { increments, incrementBy, decrements, hideCounter };

// or you can export all the actions directly

export const counterActions = counterSlice.actions;