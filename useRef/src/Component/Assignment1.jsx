
import { useEffect } from "react"
import { useRef } from "react"

//Create componenet with text input field and the button. When the comonents mounds or the button is clicked
// Automatically focus the text input field using useRef()
// useRef is use for getting access of dom elements instead of documnetgetelementbyid


export function Assignment1() {

    const inputref = useRef()

    useEffect(() => {
        // document.getElementById("ref").focus()
        inputref.current.focus()

    }, [])

    function focusHandler() {

        // document.getElementById("ref").focus()
        inputref.current.focus()
    }


    return <div>
        <input ref={inputref} type="text" />
        <button onClick={focusHandler}> get focus</button>

    </div>
}