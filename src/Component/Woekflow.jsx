

const Woekflow= () => {
    return (
        <section className="bg-[#8B31FF] py-20 px-6 hover:bg-indigo-800">
            <div className="container mx-auto text-center text-white">
                
                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Ready To Transform Your Workflow?
                </h2>

                {/* Subtext */}
                <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter. 
                    Start your free trial today.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                    <button className="btn bg-white text-[#8B31FF] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg w-full sm:w-auto">
                        Explore Products
                    </button>
                    <button className="btn bg-[#8B31FF] border-2 border-white/50 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition w-full sm:w-auto">
                        View Pricing
                    </button>
                </div>

                {/* Footer small text */}
                <p className="text-sm md:text-md opacity-80">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </section>
    );
};

export default Woekflow;