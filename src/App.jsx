import "./App.css";
import Post from "./Post";
import { useState } from "react";
import Effect from "./Effect";
import Ref from "./Ref";
import Reducer from "./Reducer";

function App() {
  const myName = "Authaithgip Chanoonan";
  const myAge = 25;
  const num1 = 10;
  const num2 = 20;
  const randomNumber = Math.random();
  const [userData, setuserData] = useState({
    user : "Authaithip Chanoonan",
    password : "123456",
    address : "1/2 Samutsakhon",
  });

  const userClick = () =>{
    setuserData({
      user : "Authaithip",
      password : "123456789",
    });
  };

  return (
    <>
    <Reducer />
    <Ref />
    <Effect />
    <button onClick={userClick}>Click Here</button>
    <p>My Name is : {userData.user}</p>
    <p>My Password is : {userData.password}</p>
    <p>My Adress is : {userData.address}</p>

    <Post student="NumNim" score="50" />
    <Post student="Num" score="60" />



    {/* <Post myId="1"> Acer Gaming Open</Post>
    <Post myId="2"> Azus Gaming Open</Post> */}

      {/* {/* <h1>Hello World</h1>
      <h2 style={{ color: "green", fontSize: "24" }}>
        My Name is : {myName} , I'am {myAge} year old
      </h2>
      <h2 className="text ">
        Sum of {num1} + {num2} = {num1 + num2}
      </h2>
      <p>Random Number : {randomNumber}</p>
      {randomNumber < 0.5 ? <div>Your Lose</div> : <di>Your Win</di */}
    </>
  );
}

export default App;
