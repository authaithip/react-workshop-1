import React, { useReducer } from 'react'

const initialState = { count: 0 };   //กำหนดค่าเริ่มต้นของ state เป็น 0
function reducer(state, action) {
  switch (action.type) {    //ตรวจสอบจากการคลิกปุ่ม {type: "???"} 
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      throw new Error("Unknown action");
  }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, initialState);   //ใช้ useReducer เพื่อจัดการ state และ dispatch action

  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={()=> dispatch({ type: "increment"})} >increment</button>
      <button onClick={()=> dispatch({ type: "decrement"})} >decrement</button>
      <button onClick={()=> dispatch({ type: "reset"})} >reset</button>

    </>
  )
}

export default Reducer
