import { useState, useCallback, memo } from "react"
 

  export function Assignment1() {

 const [count , setCount] = useState(0)


 const incrementHandler = useCallback (() => {
      // setCount(  count + 1)
      setCount(currentcount => currentcount + 1)
 } , [] )

 const decrementHandler = useCallback (() => { 
  // setCount(  count - 1)
  setCount(currentcount => currentcount - 1)
  }, [])



  return <div>
   <p> Count: {count}</p> 

<Handler Increment={incrementHandler} Decrement= {decrementHandler} />

  </div>
}

// this child will not re-render irrespective of App rerender because of callback
const Handler =memo(({Increment, Decrement}) => {

  return <div> 
    <button onClick={Increment}> Increment</button>
    <button onClick={Decrement}>Decrement</button>
  </div>
})

