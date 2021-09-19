import React ,{useState} from "react";

const Test=props =>{
 
  const [myName,setMyName]=useState("");
  //const [myInfo,setMyInfo]=useState({});
  //const [myInfo,setMyInfo]=useState("My Info String ");
  //const [myInfo,setMyInfo]=useState([1,2,3,4,5]);
  const [myInfo,setMyInfo]=useState({
    a:"Hello",
    b:"World"
  });
  const changeState=()=>{
    setMyName("Hello Sajib");
    // setMyInfo({
    //   age:30,
    //   address:"Dhaka,BD"
    // })

    //setMyInfo(myInfo.concat(6));

    setMyInfo({
         ...myInfo,
        //  a:"Hello",
        //  b:"Pranto"
       })
  }
  
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