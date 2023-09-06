// import { combineReducers  } from 'redux'; // redux has a combineReducers, but we're going to use the better option from the toolkit
import { counterSlice } from './counterReducer';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: counterSlice.reducer
});

// In case you have multiple reducer, you can pass an object and assign names to each reducer
// eg:
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer,
//         anotherReducer: anotherReducer.reducer
//     }
// });

// If you do the above, then you need to take into consideration the new name you assigned the the slice.
// eg:
// const store = configureStore({
//     reducer: {
//         counterNewName: counterSlice.reducer,
//     }
// });
// useSelector(state => state.isHidden) ---> will become --> useSelector(state => state.counterNewName.isHidden); 


export default store;