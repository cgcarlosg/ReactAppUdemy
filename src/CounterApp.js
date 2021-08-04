import React, {useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

    const [ counter, setCounter]  = useState(0);
   

    const handleAdd = () => {
       setCounter(counter+1)
 //    setCounter( c => c+1)
    }

    const handleSubstract = () => {
        setCounter(counter-1)
  //    setCounter( c => c+1)
     }

     const reset = () => {
        setCounter(value)
  //    setCounter( c => c+1)
     }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={handleAdd}>+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={handleSubstract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp