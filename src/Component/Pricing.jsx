

const Pricing = () => {
    return (
        <section className="bg-white py-16 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Starter Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Starter</h3>
                            <p className="text-gray-600 mb-8">Perfect for getting started</p>
                            
                            <div className="flex items-baseline mb-12">
                                <span className="text-6xl font-bold">$0</span>
                                <span className="text-xl text-gray-400 ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to 10 free tools</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Basic templates</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Community support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> 1 project per month</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-[#8B31FF] text-white px-8 py-4 rounded-full font-bold text-lg mt-12 w-full">
                            Get Started Free
                        </button>
                    </div>

                    {/* Pro Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between bg-[#8B31FF] hover:text-white transition duration-300">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-2xl font-bold">Pro</h3>
                                <span className="bg-[#FFC64C] text-xs font-bold px-4 py-1.5 rounded-full text-black">Most Popular</span>
                            </div>
                            <p className="text-gray-600 mb-8">Best for professionals</p>
                            
                            <div className="flex items-baseline mb-12">
                                <span className="text-6xl font-bold">$29</span>
                                <span className="text-xl text-gray-400 ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Access to all premium tools</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited templates</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Unlimited projects</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Cloud sync</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Advanced analytics</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-white text-indigo-500 px-8 py-4 rounded-full font-bold text-lg mt-12 hover:bg-indigo-500 hover:text-white transition w-full">
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise Card */}
                    <div className="border border-gray-200 rounded-3xl p-10 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-3">Enterprise</h3>
                            <p className="text-gray-600 mb-8">For teams and businesses</p>
                            
                            <div className="flex items-baseline mb-12">
                                <span className="text-6xl font-bold">$99</span>
                                <span className="text-xl text-gray-400 ml-2">/Month</span>
                            </div>
                            
                            <ul className="space-y-4 text-lg">
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Everything in Pro</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Team collaboration</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom integrations</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Dedicated support</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> SLA guarantee</li>
                                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom branding</li>
                            </ul>
                        </div>
                        
                        <button className="btn bg-[#8B31FF] text-white px-8 py-4 rounded-full font-bold text-lg mt-12 w-full">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pricing;