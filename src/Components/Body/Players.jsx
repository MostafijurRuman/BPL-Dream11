
import Player from "./Player";


export default function Players({handelChoosePlayer,allPlayers}) {
    
  return (
    <div className="p-4">
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        {allPlayers.map(player => (
          <Player key={player.playerId} player={player} handelChoosePlayer={handelChoosePlayer} />
        ))}
      </div>
    </div>
  )
}
