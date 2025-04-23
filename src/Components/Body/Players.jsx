
import Player from "./Player";


export default function Players({handelChoosePlayer,allPlayers, AlreadySelected}) {
    
  return (
    <div className="p-4">
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPlayers.map(player => (
          <Player key={player.playerId} player={player} handelChoosePlayer={handelChoosePlayer}  AlreadySelected={AlreadySelected} />
        ))}
      </div>
    </div>
  )
}
