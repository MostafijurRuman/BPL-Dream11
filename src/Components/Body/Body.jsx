import Players from "./Players";
import Selectedplayer from './Selectedplayer'


const Body = ({handelChoosePlayer,selected,allPlayers}) => {
    const handelSelected =() =>{
        const available = document.getElementById('available');
        const selected = document.getElementById('selected');
        
        available.classList.add('hidden')
        selected.classList.remove('hidden')
        
    };

    const handelAvailable =() =>{
        const available = document.getElementById('available');
        const selected = document.getElementById('selected');
        
        available.classList.remove('hidden')
        selected.classList.add('hidden')
        
    };


    return (
        <div>


            {/* Available Section */}
            <div id="available" className="">
                <div className="flex justify-between mt-[88px] mb-8">
                    <div>
                        <h1 className="text-[28px] font-bold">Available Players</h1>
                    </div>
                    
                    <div>
                        <button className="btn font-bold text-[16px] px-[30px] py-[14px] md:rounded-l-[12px] md:rounded-r-none border border-[rgba(19,19,19,0.10)] bg-[#E7FE29]">
                            Available</button>
                        <button onClick={handelSelected}  className="btn text-[16px] font-normal text-[#13131399] md:rounded-tr-[12px] md:rounded-br-[12px] border-t border-r border-b border-solid border-[rgba(19,19,19,0.10)] bg-white px-5 py-[14px]">
                            Selected ({selected.length})</button>
                    </div>
                </div>
                <Players handelChoosePlayer={handelChoosePlayer} allPlayers={allPlayers}></Players>
            </div>
         {/* Selected Section */}
         <div id="selected" className="hidden">
                <div className="flex justify-between mt-[88px] mb-8">
                    <div>
                        <h1 className="text-[28px] font-bold">Selected Player ({selected.length}/6)</h1>
                    </div>
                    
                    <div>
                        <button onClick={handelAvailable} className="btn text-[16px] font-normal text-[#13131399] md:rounded-l-[12px] border border-[rgba(19,19,19,0.10)] bg-white px-[30px] py-[14px]">
                        Available
                        </button>
                        <button className="btn font-bold text-[16px] px-[17px] py-[14px] md:rounded-tr-[12px] md:rounded-br-[12px] border border-[rgba(19,19,19,0.10)] bg-[#E7FE29]">
                        Selected ({selected.length})
                        </button>

                    </div>
                </div>
                {/* Selected Players */}
                <div>
                  {selected.map(player => <Selectedplayer player={player}></Selectedplayer>)}
                </div>
         </div>


        </div>
    );
};

export default Body;