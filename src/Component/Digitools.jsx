import UserImage from "../assets/user.png"
import PackageImage from "../assets/package.png"
import RocketImage from "../assets/rocket.png"

const Digitools = () => {
    return (
        <section className="bg-[#F9FAFB] py-20 px-6">
            <div className="container mx-auto text-center">
                
                {/* Heading Section */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#0B1221] mb-4">
                    Get Started In 3 Steps
                </h2>
                <p className="text-gray-500 text-lg mb-16">
                    Start using premium digital tools in minutes, not hours.
                </p>

                {/* Steps Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Step 1 */}
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative flex flex-col items-center">
                        <span className="absolute top-6 right-6 bg-[#8B31FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            01
                        </span>
                        <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8">
                            <img src={UserImage} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0B1221]">Create Account</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Sign up for free in seconds. No credit card required to get started.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative flex flex-col items-center">
                        <span className="absolute top-6 right-6 bg-[#8B31FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            02
                        </span>
                        <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8">
                            <img src={PackageImage} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0B1221]">Choose Products</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Browse our catalog and select the tools that fit your needs.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative flex flex-col items-center">
                        <span className="absolute top-6 right-6 bg-[#8B31FF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                            03
                        </span>
                        <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8">
                            <img src={RocketImage} alt="" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#0B1221]">Start Creating</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Download and start using your premium tools immediately.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Digitools;