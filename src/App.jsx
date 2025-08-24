import { useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import Players from "./component/Players/Players";

function App() {
  const [amount, setAmount] = useState(0);
  const [selectedPlayers, setSelectedPlayers] =useState([]);
  const addToMoney = money =>{
    const updateAmount = amount + money ;
    setAmount(updateAmount) 
  }

  const playerRate = (price, player) =>{
    const subsPreviousAmount = (amount - price);
    setAmount(subsPreviousAmount);
    amount <= 0 && alert('Your Balance Is Empty !!');

    const remainingPlayer = [...selectedPlayers, player];
    setSelectedPlayers(remainingPlayer);
    
  }
  return (
    <>
      <Navbar amount={amount}></Navbar>
      <Header addToMoney ={addToMoney}></Header>
      <Players amount ={amount} playerRate={playerRate} selectedPlayers={selectedPlayers}></Players>
      
    </>
  );
}

export default App;
