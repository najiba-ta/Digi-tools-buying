import BannerImage from "../assets/banner.png";
import { FaCircleDot } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col-reverse mt-10 md:flex-row gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-500/10  text-indigo-500 text-sm font-medium px-5 py-2 rounded-full">
                       <FaCircleDot /> New: AI-Powered Tools Available
                    </div>

                    
                        <h1 className="text-3xl lg:text-5xl font-bold">
                        Supercharge Your
                        <br />
                        <span className="text-3xl lg:text-5xl font-bold text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent">
                            Digital Workflow
                        </span>
                    </h1>
                    

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products

                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn bg-indigo-600 hover:bg-indigo-400 transition-all px-4 py-2 rounded-full font-semibold text-lg shadow-xl shadow-indigo-500/30 flex items-center gap-3 group text-white">
                            Explore Products
                        </button>
                        <button className="btn bg-transparent  hover:bg-indigo-200 transition-all px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-indigo-400/30 flex items-center gap-3 group text-indigo-600 border border-indigo-500">
                            <CiPlay1 />Watch Demo
                            
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;