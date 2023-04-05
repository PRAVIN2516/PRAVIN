import React, { useEffect, useState } from 'react'

export default function Day8() {
    const [message, setMessage] = useState('Hi there, how are you?');
      useEffect(() => {
      console.log('trigger use effect hook');
      setTimeout(() => {
        setMessage("I'm fine, thanks for asking.");
      }, 1000)
    })
    return (<div>
        <h1><marquee> DAY 8 Use of Hookes</marquee></h1><br/>
        <h1>{message}</h1></div>)
}