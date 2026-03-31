import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-gray-400 py-16 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-white text-4xl font-bold mb-5">DigiTools</h2>
                        <p className="max-w-xs leading-relaxed text-lg">
                            Premium digital tools for creators, professionals, and businesses. 
                            Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">Product</h3>
                        <ul className="space-y-4 text-lg">
                            <li><a href="#" className="hover:text-white transition">Features</a></li>
                            <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition">Templates</a></li>
                            <li><a href="#" className="hover:text-white transition">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-lg">
                            <li><a className="hover:text-white transition">About</a></li>
                            <li><a className="hover:text-white transition">Blog</a></li>
                            <li><a className="hover:text-white transition">Careers</a></li>
                            <li><a  className="hover:text-white transition">Press</a></li>
                        </ul>
                    </div>

                    {/* Resources & Social Links */}
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-6">Resources</h3>
                        <ul>
                            <li><a className="hover:text-white transition">Documentation</a></li>
                            <li><a className="hover:text-white transition">Help Center</a></li>
                            <li><a className="hover:text-white transition">Community</a></li>
                            <li><a className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                           <h3 className="text-white text-xl font-semibold mb-5">Social Links</h3>
                            <ul className="space-y-4 text-lg mb-8 flex gap-2.5">
                             <li><a className="hover:text-white transition"><FaFacebook /></a></li>
                             <li><a className="hover:text-white transition"><FaLinkedin /></a></li>
                             <li><a className="hover:text-white transition"><FaInstagramSquare /></a></li>
                             <li><a className="hover:text-white transition"><MdEmail /></a></li>
                            </ul>
                        </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-md">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                        <a href="#" className="hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;