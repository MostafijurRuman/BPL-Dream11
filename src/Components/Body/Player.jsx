import React from 'react'
import { FaUser, FaFlag } from "react-icons/fa";

export default function Player({player,handelChoosePlayer,AlreadySelected}) {
  
    return (
        
            <div className="bg-white rounded-xl shadow-md  p-6">
          <img
            src={player.image}
            alt={player.name}
            className="w-[481px] h-[250px]  rounded-md object-cover"
          />
    
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <h2 className="text-[20px] font-semibold text-gray-800">{player.name}</h2>
            </div>
    
            <div className="flex items-center justify-between mt-1 border-b border-[#1313131A] pb-4 mb-4">
              <div className="flex items-center gap-1 text-[16px] font-normal text-gray-600">
                <FaFlag className="text-gray-500" />
                <span>{player.country}</span>
              </div>
              <span className="text-[14px] font-normal bg-gray-200 px-2 py-1 rounded-[8px] text-gray-700">
                {player.role}
              </span>
            </div>
            <span className="font-bold text-[16px]">Rating</span>
            <div className="mt-3 text-sm text-gray-700">
            
              <div className="flex justify-between">
                <span className="text-[#131313] text-[16px] font-semibold">{player.battingType}</span>
                <span className="text-gray-600 font-normal text-[16px]">{player.bowlingType}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-[#131313] text-[16px] font-semibold">Price:${player.biddingPrice}</span>
                <button onClick={()=>{handelChoosePlayer(player); AlreadySelected(player);}} className=" w-32 bg-gray-100 hover:bg-[#E7FE29]  text-gray-800 text-sm font-medium py-1.5 rounded-md transition">
              Choose Player
            </button>
              </div>
            </div>
    
            
          </div>
        </div>
        
      );
}
