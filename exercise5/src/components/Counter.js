import { useSelector, useDispatch } from "react-redux";

const Counter = () => {

    const counter = useSelector(state => state.counter); 

    const dispatch = useDispatch();
    const incrementBy = () => dispatch({type: 'incrementBy', payload: 10})
    const increment = () => dispatch({type: 'increment'});
    const decrement = () => dispatch({type: 'decrement'});
    
    const isHidden = useSelector(state => state.isHidden); 
    const hideCounter = () => dispatch({type: 'hideCounter'});

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