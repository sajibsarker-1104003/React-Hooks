import React ,{useState} from "react";

const Test=props =>{
  const testState=useState('');
  //console.log(testState[0]);//value accessed
  //console.log(testState[1]);//function accessed

  if(testState[0]===""){
    testState[1]("Good Morning Sajib");
  }
  return(
    <div>
      <h3>{testState[0]}</h3>

    </div>
    );
}
export default Test;