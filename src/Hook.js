import React,{useState,useEffect} from 'react';
import './App.css';

function Hooktest ()
{
    const [data,setData]=useState(0);
    const [name,setName] = useState("")
    useEffect(()=>{
        console.log("UseEffect",data);
    })

    const pluss =(valuedata) =>
    {
        console.log("PlussVsalu",valuedata)
        if(valuedata=== undefined)
        {
            console.log("if",valuedata)
            valuedata=0
        }
        console.log("PlussData",valuedata)
        let data = (parseInt(valuedata))+1
        setData(data);
       
        return data
    }
    return(

        <div className='App'>
            
            <div>
            <p>Number :  {data}</p>
            <p>Name : {name}</p>
            <button onClick={()=>setData(data+1)}>ClickPluss</button>
            <button onClick={()=>setData(data-1)}>Clickdip</button>
            <button onClick={()=>setData(0)}>ClicksetZero</button>
            <button onClick={()=>setName("Siripong Smerjai")}>ClickName</button>
            </div>
           
            

        </div>
    );

}
export default Hooktest;