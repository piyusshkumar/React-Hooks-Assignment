
import { useState } from "react"
import { useRef } from "react"

// Calculate no of re-render happens by natural way not a Global variable

// Another use of useRef


export function Assignment2() {

    const [count , setCount] = useState(0)

    //This should not be a Global variable it should be a part of React lifecycle
    const numoftimesrerendered = useRef(0)

    function Handler() {
        setCount(count + 1)
    }

    numoftimesrerendered.current = numoftimesrerendered.current + 1


    return <div>     
        <p>This has re-rendered {numoftimesrerendered.current} times</p>
        <button onClick={Handler}> Increase Re-Render</button>

    </div>
}