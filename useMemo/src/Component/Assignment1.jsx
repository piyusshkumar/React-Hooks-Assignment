import { useMemo, useState } from "react"

// finding the factorial on the base on user input
// it shoud be done via expensive calculation should only run if input changes not on every rerender for this use usememo



 export function Assignment1() {

    const [count, setCount] = useState()

    const expensivevalue = useMemo(() => {
        let value = 1;

        for (let i = count; i <= 1; i--) {

            value = value * i
        }

        return value


    }, [count])




    return (<div>

        <input
            type="number"
            value={count}
            onChange={(e) => {
                setCount(Number(e.target.value))
            }} />

        <br />

        <p> Calculated Value : {expensivevalue}</p>

    </div>)
}

export default App
 
 
 