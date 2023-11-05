import React, {useState} from 'react'

function UseState() {
    const [name, setName] = useState("Developer");
    const [flag, setFlag] = useState(false);
    const [count, setCount] = useState(0);
    const [nameList, setNameList] = useState([]);

    const date = new Date();
    let hours = date.getHours();
    let status = (hours < 12)? "Morning" :
                ((hours <= 18 && hours >= 12 ) ? "Afternoon" : "Night");

    function changeName() {
        return setFlag(!flag);
    }

    const increment = () => {
        return setCount(count+1);
    }

    const decrement = () => {
        return setCount(count-1);
    }

    const getName = (e) => {
        e.preventDefault();
        setNameList([...nameList, {id:nameList.length, name}]);
        setName("");
    }

  return (
    <div>
        <h1 className='text-center'>Hello {flag ? name : "Vivek"}, Good {status} Have a Nice Day..</h1>
        <button className='btn btn-primary m-4 fw-bold' onClick={changeName}>Change Name</button>
        <hr></hr>
        <div className='container'>
            <button className='btn btn-success m-4 fw-bold' onClick={increment}>+</button>
                {count}
            <button className='btn btn-danger m-4 fw-bold' onClick={decrement}>-</button>
            <hr></hr>
            <form onSubmit={getName}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button className='btn btn-warning m-4 fw-bold'>Submit</button>
            </form>
            {
                nameList.map((item, index)=>{
                    return (
                        <ul className="list-group list-group-flush" key={index}>
                            <li className="list-group-item">{item.name}</li>
                        </ul>
                    );
                })
            }
        </div>
    </div>
  )
}

export default  UseState;
