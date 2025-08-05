import { useEffect, useState } from "react"
import '../components/Card.css'
import Products from "./Products"


const Counter = () => {
    const [count , setCount] =useState(0)


    const increase = () =>{
        setCount(count+1)
    }
    const decrease = () =>{
        setCount(count-1)
    }
    const reset = () =>{
        setCount(0)
    }

    const [data,setData] =useState([])
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data,'data')
            setData(data)
        });
    },[])
return(
    <div className="card">
        <h1>Count is:{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>-</button>
        {
            data.length > 0 && <Products data={data}/>
        }
    </div>
)
}
export default Counter