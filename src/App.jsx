import { useEffect, useState } from "react"
import Body from "./Components/Body/Body"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [allPlayers,setAllPlayers] = useState([]);
  useEffect(()=>{
      fetch('../../../public/Players.json')
      .then(res => res.json())
      .then(data => setAllPlayers(data))
  },[])

  const notifyCoinsAdded = () => {
    toast.success("Credit Added to your Account!");
  };
  const [coins,setCoins]=useState(0);
  const handelFreeCredit = () =>{
    setCoins(coins + 600000);
  }
  const [selected,setSelected] = useState([]);
  const handelChoosePlayer = player =>{
    const newSelectedPlayers = [...selected,player]
    setSelected(newSelectedPlayers)
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
      
      <Body handelChoosePlayer={handelChoosePlayer} selected={selected} allPlayers={allPlayers}></Body>
    
      
      </div>
      <Footer></Footer>

    </>
  )
}

export default App
