import axios from "axios";
import React from 'react';
export default class Day7 extends React.Component{
    state={person:[]}
    componentDidMount()
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{this.setState({person:res.data})})
    }
    render(){
        return(
            <>
            <h1><marquee> DAY 7-Display the details</marquee></h1><br/>
            {this.state.person.map((e)=> <li key={e.id}> {e.title} </li>)}
            </>)}
}