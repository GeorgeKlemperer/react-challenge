import { useState } from "react";


function Shouter () {
    const [text, setText] = useState("");


    function shout(event) {
        setText(event.target.value.toUpperCase())
    }


    return (<>
    <input value={text} onChange={shout}/>
    <output>{text}</output>
    </>)
}


export default Shouter