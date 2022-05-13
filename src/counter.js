import { useState } from "react"
import "./counter.css"
export default function Counter(){
    const [count, setCount] = useState(0)

    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        if (count <= 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }

    function reset(){
        setCount(0)
    }
    return (
        <>
            <div className="counttCont">
                <h1>{count}</h1>
                <div className="CountBtn">
                    <button onClick={decrement}>decrease</button>
                    <button onClick={reset}>reset</button>
                    <button onClick={increment}>increase</button>
                </div>
            </div>
        </>
    )
}