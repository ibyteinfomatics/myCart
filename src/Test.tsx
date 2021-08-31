import React from 'react'
import {useState,useEffect} from "react";


export default function Test() {
    const[name,setName]=useState ('');
     useEffect(() => {
       let data:string="mk";



       setName(data)
     }, [])

    return (
        <div>
            <h1>{name}</h1>
            
        </div>
    )
}
