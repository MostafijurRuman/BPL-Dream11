import { RiDeleteBin5Line } from "react-icons/ri";

export default function Selectedplayer({player,handelPlayerRemove}) {
    const {name,battingType,image,playerId} =player;
  return (
    <div className="flex justify-between items-center p-6 rounded-3xl border border-[#1313131A] mb-6">
            <div className="flex items-center gap-6 ">
                <div>
                    <img className="w-20 h-20 rounded-2xl" src={image} alt="" />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold">{name}</h1>
                    <p className="text-[16px] font-normal text-[#13131399]">{battingType}</p>
                </div>
            </div>

            <div>
                <button onClick={()=>handelPlayerRemove(playerId)}><RiDeleteBin5Line className="text-2xl text-red-400 cursor-pointer" /></button>
            </div>
    </div>
  )
}
