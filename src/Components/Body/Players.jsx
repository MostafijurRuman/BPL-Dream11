import { useEffect, useState } from "react"
import Player from "./Player";


export default function Players() {
    const [Players,setPlayers] = useState([]);
    useEffect(()=>{
        fetch('../../../public/Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
  return (
    <div className="p-4">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {Players.map(player => (
          <Player key={player.playerId} player={player} />
        ))}
      </div>
    </div>
  )
}
