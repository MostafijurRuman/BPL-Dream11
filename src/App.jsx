import { useEffect, useState } from "react"
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [allPlayers,setAllPlayers] = useState([]);
  useEffect(()=>{
      // fetch('../../../public/Players.json')
      fetch('https://raw.githubusercontent.com/MostafijurRuman/BPL-Dream11/refs/heads/main/public/Players.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data))
  },[])

  const notifyCoinsAdded = () => {
    toast.success("Credit Added to your Account!");
  };

  const notifyPlayerAdded = (playerName) => {
    toast.success(`Congrats!! ${playerName} is now in your squad`);}

  const notifyPlayerNotAdded = () => {
    toast.error("Not enough money to buy this player. Claim some Credit");}

  const notifyPlayerAlreadyAdded = () => {
    toast.warn("Oops! This player is already part of your team.");}

    const notifyPlayerRemoved = () => {
      toast.success("Player successfully removed from your team!");};

    const notifyMaxPlayerAdded = () => {
      toast.warn("Oops! You’ve already selected 6/6 players. Remove one to add a new player.");}
  
  
  const [coins,setCoins]=useState(0);
  const handelFreeCredit = () =>{
    setCoins(coins + 6000000);
  }
  const [selected,setSelected] = useState([]);
  const handelCoins = (biddingPrice)=>{
    const newCoins = coins-biddingPrice;
    setCoins(newCoins)
  };
 
  const AlreadySelected = (player)=>{
    const isSelected = selected.find(Selectedplayer => Selectedplayer.playerId === player.playerId)
    if(isSelected){
      notifyPlayerAlreadyAdded()
    }
  }
  const handelChoosePlayer = player =>{
    const isSelected = selected.find(Selectedplayer => Selectedplayer.playerId === player.playerId)

    if(coins>player.biddingPrice && !isSelected && selected.length+1 <= 6){
      const newSelectedPlayers = [...selected,player]
      setSelected(newSelectedPlayers)
      const playerName=player.name;
      const {biddingPrice} =player;
      notifyPlayerAdded(playerName);
      handelCoins(biddingPrice);
      
    }
    else if(isSelected){
      console.log("good job")
    }
    else if(selected.length+1 >= 6){
      notifyMaxPlayerAdded()}

    else{
      notifyPlayerNotAdded()
    }
  }

  const handelPlayerRemove =(id)=>{
    const newSelectedPlayers = selected.filter(player => player.playerId !== id);
    setSelected(newSelectedPlayers)
    notifyPlayerRemoved()
  }
  
  return (
    <>
      <div className="max-w-screen-4xl mx-auto px-6 md:px-16 lg:px-28">
      <Header handelFreeCredit={handelFreeCredit} notifyCoinsAdded={notifyCoinsAdded} coins={coins}></Header>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      
      />
      
      <Body handelChoosePlayer={handelChoosePlayer}  AlreadySelected={ AlreadySelected} selected={selected} allPlayers={allPlayers} 
      handelPlayerRemove={handelPlayerRemove}
      ></Body>
    
      
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
