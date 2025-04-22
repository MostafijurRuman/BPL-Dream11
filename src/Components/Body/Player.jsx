import React from 'react'
import { FaUser, FaFlag } from "react-icons/fa";

export default function Player({player}) {
    return (
        
            <div className="bg-white rounded-xl shadow-md  p-3">
          <img
            src={player.image}
            alt={player.name}
            className="w-full  rounded-md object-cover"
          />
    
          <div className="mt-3">
            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <h2 className="text-lg font-semibold text-gray-800">{player.name}</h2>
            </div>
    
            <div className="flex items-center justify-between mt-1">
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <FaFlag className="text-gray-500" />
                <span>{player.country}</span>
              </div>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                {player.role}
              </span>
            </div>
    
            <div className="mt-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Rating</span>
                <span className="text-gray-600">{player.battingType}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="font-medium">Price:</span>
                <span className="text-gray-600">${player.biddingPrice}</span>
              </div>
            </div>
    
            <button className="mt-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium py-1.5 rounded-md transition">
              Choose Player
            </button>
          </div>
        </div>
        
      );
}
