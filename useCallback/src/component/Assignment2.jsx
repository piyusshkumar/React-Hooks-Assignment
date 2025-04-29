import { memo, useCallback, useState } from "react"

//Create a component with a text input field and a button. The goal is to display an alert with the
// text entered when the button is clicked. UseCallback to memoize the event handler function that
// triggers the alert, ensuring it,s not recreated on every render
//Currently we only have input as a state varaible and hence you might not see the benefits of 
// useCallback, We're also not passing it down to another componet as a prop which is another reason 
// for you to not see it's benefits immedietely.

export function Assignment2() {

    const [input , setInput] = useState(" ")


    const  Showalert = useCallback( () => {
        alert(input)
    },  [input]) 

    return <div>
        <input type="text" onChange={e => setInput(e.target.value) } />
        <Handler  props = {Showalert}/>    
          </div>
}

const Handler = memo(({props}) => {
    return <div>
    <button onClick={props}> Create Alert</button>
   </div>
})


    