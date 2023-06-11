import React from 'react';
import { useState, useEffect } from 'react';

const TripList=()=>{

    const [trips, setTrips]= useState([]);

    let url="https://trip-g3sh.onrender.com"

   
     const getData=()=>{
        fetch(`${url}/trips`) .then((response)=>response.json())
        .then((response)=>{
          setTrips(response)
    
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
      
    }
   

    useEffect(()=>{
        getData();
     },[])

     const deleteTrip=async(id)=>{
        await fetch(`${url}/trips/delete/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        });

        getData();
      }

    return(
        <div className='trips'>
          <h1>All Trips</h1>
          <ul>
        <li>Name</li>
        <li>Email</li>
        <li>Destination</li>
        <li>Members</li>
        <li>Budget</li>
        <li >Delete</li>
    </ul>

    {
         trips?.map((el)=>{
            
            return <ul key={el._id}>
        <li>{el.name}</li>
        <li>{el.email}</li>
        <li>{el.destination}</li>
        <li>{el.members}</li>
        <li>{el.budget}</li>
        <div  onClick={()=>{
            deleteTrip(el._id)
        }}><li>Delete</li></div>
        
    </ul>

})
    }
    
        </div>
    )
}

export default TripList;