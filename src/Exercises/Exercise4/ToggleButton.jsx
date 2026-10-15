import { useState } from "react";


const ToggleButton = ()=>{
    const [isValid, setIsValid] = useState(true);
    const toggle = ()=>{
        setIsValid(!isValid)
    }
    return(
    <>
        <h1>The button is: {isValid ? 'ON' : 'OFF'}</h1>
        <button onClick={toggle}>Turn{isValid ? 'ON' : 'OFF'}</button>
    </> 
)
};

export default ToggleButton;