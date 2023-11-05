import React, {useState, useEffect} from 'react'
import ClassComp from '../ClassComp'

function UseEffect() {
    const [flag, setFlag] = useState(true);
    const changeDate = () => {
        return setFlag(!flag);
    }

  return (
    <div className='container mt-4'>
        <h2 className='text-center'>Date and time with hide and show toggle</h2><br></br>
        {flag ? <ClassComp /> : "Apna Time Aayega..!"}<br></br>
        <button className='btn btn-danger mt-4' onClick={changeDate}>Hide-Show Date</button>
    </div>
  )
}

export default UseEffect
