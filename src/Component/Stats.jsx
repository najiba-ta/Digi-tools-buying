const Stats = () => {
    return (
        <section className="bg-[#8B31FF] py-16 my-20 max-w-7xl mx-auto hover:bg-indigo-800 transition">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-white">
                
                
                <div className="flex-1 text-center px-10">
                    <h2 className="text-5xl font-bold mb-2 tracking-tight">50K+</h2>
                    <p className="text-lg font-medium opacity-90">Active Users</p>
                </div>
                   
                   <div className="hidden md:block w-[1.5px] h-20 bg-white/30"></div>
                
                

                
                <div className="flex-1 text-center px-10 my-12 md:my-0">
                    <h2 className="text-5xl font-bold mb-2 tracking-tight">200+</h2>
                    <p className="text-lg font-medium opacity-90">Premium Tools</p>
                </div>
                   
                   <div className="hidden md:block w-[1.5px] h-20 bg-white/30"></div>
                
                
                
                <div className="flex-1 text-center px-10">
                    <h2 className="text-5xl font-bold mb-2 tracking-tight">4.9</h2>
                    <p className="text-lg font-medium opacity-90">Rating</p>
                </div>

            </div>
        </section>
    );
};

export default Stats;