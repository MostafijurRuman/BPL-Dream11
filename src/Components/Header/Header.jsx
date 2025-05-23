import logo from '../../assets/logo.png'
import dolor from '../../assets/dollar.png'
import banner from '../../assets/banner-main.png'

export default function Header({handelFreeCredit,coins,notifyCoinsAdded}) {
    return (
       <div>
         <div className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-sm  max-w-screen-4xl mx-auto px-6 md:px-16 lg:px-28  flex items-center justify-between py-6">
            <div>
                <img src={logo} alt="Logo" className="h-10" />
            </div>
            <div>
                <ul className="flex space-x-6 items-center font-normal text-[16px]">
                    <li className='hidden md:inline'>Home</li>
                    <li className='hidden md:inline'>Fixture</li>
                    <li className='hidden md:inline'>Teams</li>
                    <li className='hidden md:inline'>Schedules</li>
                    <li>
                        <button className="bg-white text-black font-semibold px-5 py-2 rounded-xl border-[#1313131A] shadow flex items-center space-x-2">
                            <span>{coins} Coin</span>
                            <img src={dolor} alt="" className="inline-block" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        {/* hero section start */}
        <div className="relative bg-black rounded-2xl overflow-hidden px-6 py-[80px] text-white text-center mt-[88px]">
            {/* Top Right Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#CD998D] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>

            {/* Bottom Left Glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#828CE5] rounded-full blur-[150px] opacity-30 pointer-events-none"></div>

            {/* Banner Content */}
            <div className="relative z-10 flex flex-col items-center gap-4">
                <img
                    src={banner}
                    alt="Cricket Banner"
                    className="w-32 md:w-40"
                />
                <h1 className="text-2xl md:text-[40px] font-bold font-sora">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className="text-sm md:text-[24px] font-medium text-[#FFFFFFB2]">
                    Beyond Boundaries Beyond Limits
                </p>
                <button onClick={() => { handelFreeCredit(); notifyCoinsAdded(); }} className="mt-4 bg-lime-300 text-black px-5 py-2 rounded-lg font-semibold hover:bg-lime-400 transition">
                    Claim Free Credit
                </button>
            </div>
        </div>
       </div>
    );
}