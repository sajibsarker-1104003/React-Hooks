import React ,{useState,useEffect} from "react";

const Test=props =>{
 
  const [myName,setMyName]=useState("");  
  const [myInfo,setMyInfo]=useState({
    a:"Hello",
    b:"World"
  });
  const changeState=()=>{
    setMyName("Hello Sajib");
    setMyInfo({
         ...myInfo,
         a:"Hello",
         b:"Pranto"
       })
  }

  //as componentDidMount//
  useEffect(()=>{
    console.log(myInfo);
  },[myInfo,myName])
  
  return(
    <div>
      <button onClick={changeState}>SHOW</button>
      <h3>{myName}</h3>
      <h4>{myInfo.a}</h4>
      <h4>{myInfo.b}</h4>
      

    </div>
    );
}
export default Test;