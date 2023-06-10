import React from 'react';
import { useState, useEffect } from 'react';

const TripList=()=>{

    const [trips, setTrips]= useState([]);

    let url="https://trip-g3sh.onrender.com"
    
    useEffect(()=>{
       getData();
    },[])

   
    async function getData(){
        let data= await fetch(`${url}/trips`)
        data=await data.json();
       
        setTrips(data)
    }
    console.warn(trips)

   

    return(
        <div className='trips'>
          <h1>All Trips</h1>
          <ul>
        <li>No.</li>
        <li>Name</li>
        <li>Email</li>
        <li>Destination</li>
        <li>Members</li>
        <li>Budget</li>
        <li>Delete</li>
    </ul>

    {
        
        trips.forEach(()=>{
            <ul>
            <li>No.</li>
            <li>Name</li>
            <li>Email</li>
            <li>Destination</li>
            <li>Members</li>
            <li>Budget</li>
            <li>Delete</li>
        </ul>
        })
    }
    
        </div>
    )
}

export default TripList;