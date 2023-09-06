import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter); 

    const dispatch = useDispatch();
    const incrementBy = () => dispatch({type: 'incrementBy', payload: 10}); // We can pass a payload as a second argument
    const increment = () => dispatch({type: 'increment'});
    const decrement = () => dispatch({type: 'decrement'});

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={incrementBy}>Increment by 10</button>
        </>
    )
}

export default Counter;