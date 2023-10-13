import { useState, useEffect } from "react";

function MouseTracker () {


    const [coordinates, setCoordinates] = useState({ clientX: 0, clientY: 0 });



    useEffect (() => {
        function updateCoordinates(event) {
            // Update the coordinates state with clientX and clientY values
            setCoordinates({ clientX: event.clientX, clientY: event.clientY });
          }

         window.addEventListener('mousemove', updateCoordinates);

         // Clean up the event listener when the component unmounts
    return () => {
        window.removeEventListener('mousemove', updateCoordinates);
      }
    },[])



    return <output>{coordinates.clientX},{coordinates.clientY}</output>
}

export default MouseTracker