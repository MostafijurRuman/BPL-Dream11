import Players from "./Players";


const Body = () => {
    return (
        <div>
            <div className="flex justify-between mt-[88px] mb-8">
                <div>
                    <h1 className="text-[28px] font-bold">Available Players</h1>
                </div>
                
                <div>
                    <button className="btn font-bold text-[16px] px-[30px] py-[14px] rounded-l-[12px] rounded-r-none border border-[rgba(19,19,19,0.10)] bg-[#E7FE29]">Available</button>
                    <button className="btn text-[16px] font-normal text-[#13131399] rounded-tr-[12px] rounded-br-[12px] border-t border-r border-b border-solid border-[rgba(19,19,19,0.10)] bg-white px-5 py-[14px]">Selected (0)</button>
                </div>
            </div>


            
            <Players></Players>
        
        </div>
    );
};

export default Body;