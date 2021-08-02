import React, { useState, useEffect } from 'react';

const Coordinates = () => { 
    const [mousePos, setMousePos] = useState({x:0, y:0});

    const handleMouseMove = (event) => {
        setMousePos({x:event.x, y:event.y});
    }

    // listOfComponents 
    // everytime react renders, components may change, useEffect(callback, listOfComponents)
    // if any component in list of components changes, then the useEffect function 
    // calls the callback fn 
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        console.log("useEffect - mousemove being added!");

        return () => {
            console.log("useEffect - mousemove being removed!")
            window.removeEventListener("mouseover", handleMouseMove);
        }
    }, []);
 
    return (
        <div>
            <p>
                x:{mousePos.x} - y:{mousePos.y}
            </p>
        </div>
    )
}

export default Coordinates;