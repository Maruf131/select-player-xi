import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";

function App() {
  const [amount, setAmount] = useState(0);
  const addToMoney = money =>{
    const updateAmount = amount + money ;
    setAmount(updateAmount) 
    
  }
  return (
    <>
      <Navbar amount={amount}></Navbar>
      <Header addToMoney ={addToMoney}></Header>
      
    </>
  );
}

export default App;
