import { useMemo, useState } from "react";

// Assignment is that we have purchased some items form markets you have to written the total value and list of items with its own price


 export function Assignment3() {

  const [items , setitems] = useState([
    {naam: "Chocolate" , value: 200},
    {naam: "Papaya" , value: 20},
    {naam: "subsidy" , value: 100},
    {naam: "Food" , value: 200}
    //Add more items as needed
  ])


  const totalvalue = useMemo ( () => {

    //reducer
    let value = 0;
     for( let i = 0;  i < items.length; i++ ) {
        
      value += items[i].value
     }
     return value
  }, )


  return (<div>
    <ul>
    {items.map((item , index)  => {
      return ( 
    <li key = {index} >  {item.naam} - Price: ${item.value} </li>
  )
    } )}
    
    </ul>

  <p> Totalvalue: {totalvalue} </p> 

  </div>
  )
} 


export default App