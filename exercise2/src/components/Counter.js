import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter); // will trigger a component reload every time that the "counter" value in the state mutate

    const dispatch = useDispatch();
    const increment = () => dispatch({type: 'increment'})
    const decrement = () => dispatch({type: 'decrement'})

    return (
        <>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </>
    )
}

export default Counter;