import React from 'react';
import { useState, useEffect } from 'react';

const TripList=()=>{

    const [trips, setTrips]= useState([]);

    let url="https://trip-g3sh.onrender.com"

    let tData;

     const getData=()=>{
        fetch(`${url}/trips`) .then((response)=>response.json())
        .then((response)=>{
          setTrips(response)
    tData=response;
        //   console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
      
    }

     const deleteTrip=async(id)=>{
      window.alert("Are you sure?")
        await fetch(`${url}/trips/delete/${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type': 'application/json'
          }
        });

        getData();
      }
    const budgetLow= async()=>{
        try {
          let myData= await fetch(`${url}/trips/budget/low`);
        myData= await  myData.json();
          console.log(myData)
          setTrips(myData);
           getData();
        } catch (error) {
            console.log("Error while fetching data");
        }
    }
    //  const budgetHigh= async()=>{
    //     try {
    //          await fetch(`${url}/trips/budget/high`);
    //        getData();
    //     } catch (error) {
    //         console.log("Error while fetching data");
    //     }
    // }
    // const membersLow= async()=>{
    //     try {
    //          await fetch(`${url}/trips/members/low`);
    //        getData();
    //     } catch (error) {
    //         console.log("Error while fetching data");
    //     }
    // }
    //  const membersHigh= async()=>{
    //     try {
    //           await fetch(`${url}/trips/members/high`);
    //        getData();
    //     } catch (error) {
    //         console.log("Error while fetching data");
    //     }
    // }

    useEffect(()=>{
        getData();
     },[getData])
    return(
        <div className='trips'>
             {/* <select onchange="myPFChange()" id="myPf">       
            <option value="">Select Category</option>
            <option value="india">india</option>
            <option value="europe">europe</option>
            <option value="africa">africa</option>
            <option value="america">america</option>
          </select>    */}
            <button onClick={budgetLow}>Budget:Low To High</button>
            {/* <button onClick={budgetHigh}>Budget:High To Low</button>
            <button onClick={membersLow}>Members:Low To High</button>
            <button onClick={membersHigh}>Members:Low To High</button> */}
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
        <div id='el' onClick={()=>{
            deleteTrip(el._id)
        }}>delete</div>
        
    </ul>

})
    }
    
        </div>
    )
}

export default TripList;