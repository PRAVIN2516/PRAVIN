import React from "react";
const callalert = () =>{
    alert('alert!');
}

const callog = () => {
    console.log('Message to developer');
}

const myArray = ['a', 'e', 'i', 'o']

const show = () => {
    alert('check the console output!');
    myArray.push('u');
    console.log(myArray);
}
function Day1(){
    return(
        <div id="a">
        <p>DAY -1</p>
             <br />
            <button id="app" onClick={callalert}>alert</button>   
            <br /> <br />
            <button onClick={callog}>console</button>
            <br /> <br />
            <button onClick={show}>push</button>
            <br /> <br />
        </div>
    )
}
export default Day1 ;