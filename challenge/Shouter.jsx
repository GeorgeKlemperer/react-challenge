import { useState } from "react";


function Shouter () {
    const [text, setText] = useState("");

    function shout(event) {
        setText(event.target.value)
    }


    return (<>
    <input value={text} onChange={shout}/>
    <output>{text.toUpperCase()}</output>
    </>)
}


export default Shouter