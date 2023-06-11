import React from 'react';

let url="https://trip-g3sh.onrender.com"
const AddDetails=()=>{


  const [name, setName]= React.useState('');
  const [email, setEmail]= React.useState('');
  const [destination, setDestination]= React.useState('');
  const [members, setMembers]= React.useState('');
  const [budget, setBudget]= React.useState('');
   const addDetails=async(event)=>{
    event.preventDefault();
    let obj={name,email,destination,members,budget};

    let result= await fetch(`${url}/trips/add`, {
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        'Content-Type':"application/json"
      }
    });
    result= await result.json();
    window.alert("Trip added succesfully")
   }
    return(
        <div>

         <form className="form" id="addDetails">
        <div className="title">Add Trip</div>
        <div className="input-container ic1">
          <input id="name" className="input" type="text" placeholder="Name" value={name}  onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className="input-container ic1">
          <input id="email" className="input" type="text" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="input-container ic2">
            <select  name="destination" id="destination" value={destination} onChange={(e)=>{setDestination(e.target.value)}}>
                <option value="">Select destination</option>
                <option value="India">India</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="America">America</option>
              </select>
        </div>
        <div className="input-container ic1">
            <input id="members" className="input" type="number" value={members} placeholder=" No of Members" onChange={(e)=>{setMembers(e.target.value)}}/>
        </div>
        <div className="input-container ic1">
            <input id="budget" className="input" type="number" value={budget} placeholder=" budget" onChange={(e)=>{setBudget(e.target.value)}}/>
        </div>
          {/* <input type="submit" className="submit" value="Submit" /> */}
          <button className='submit' onClick={addDetails}>Submit</button>
        
        

    </form>
        </div>
    )
}

export default AddDetails;