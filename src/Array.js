import React,{useState,useEffect} from "react";
import './App.css'


function Array()
{
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        console.log("data",data);
        console.log("dataArray",data);
    })

    function addData()
    {
        setData([...data,{number:Math.random()}])
    }
    return(
    <div className="App-header">
        <p>Random Number</p>
        <div>
        <button onClick={addData}>Add Number</button>
        </div>
        <div>
        <ul>
            {
                data.map((item,index)=>(<li key={index}>{item.number}  Index {index}</li>))
            }
        </ul>
        </div>
        {/* <p>{data.map(item => <p>{item.number}</p>)}</p> */}
    </div>)
}
export default Array;