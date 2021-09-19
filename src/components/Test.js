import React ,{useState} from "react";

const Test=props =>{
 
  const [myName,setMyName]=useState("");
  const [myInfo,setMyInfo]=useState({});
  const changeState=()=>{
    setMyName("Hello Sajib");
    setMyInfo({
      age:30,
      address:"Dhaka,BD"
    })
  }
  
  return(
    <div>
      <button onClick={changeState}>SHOW</button>
      <h3>{myName}</h3>
      <h4>{myInfo.age}</h4>
      <h4>{myInfo.address}</h4>

    </div>
    );
}
export default Test;