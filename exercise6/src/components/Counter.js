import { useSelector, useDispatch } from "react-redux";
import { increments, decrements, counterActions } from "../store/counterReducer";

const Counter = () => {

    const counter = useSelector(state => state.counter); 

    const dispatch = useDispatch();
    const incrementBy = () => dispatch(counterActions.incrementBy(10))
    const increment = () => dispatch(increments());
    const decrement = () => dispatch(decrements());
    
    const isHidden = useSelector(state => state.isHidden); 
    const hideCounter = () => dispatch(counterActions.hideCounter());

    return (
        <>
            {!isHidden ? <p>Counter: {counter}</p> : <></>}

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementBy}>Increment by 10</button>
            <button onClick={hideCounter}>Toggle Counter</button>
        </>
    )
}

export default Counter;