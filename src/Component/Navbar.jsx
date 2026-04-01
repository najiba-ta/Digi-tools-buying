import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ carts }) => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto sticky top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <h2 className="text-4xl font-bold text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent ">DigiTools</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent "><a>Products</a></li>
                    <li className="text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent "><a>Features</a></li>
                    <li className="text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent "><a>Pricing</a></li>
                    <li className="text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent "><a>Testimonials</a></li>
                    <li className="text bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent "><a>FAQ</a></li>

                </ul>
            </div>
            <div className="navbar-end flex items-center gap-2 md:gap-4">

               
                <div className="relative">
                    <AiOutlineShoppingCart className="text-indigo-500 w-6 h-6 md:w-8 md:h-8" />

                    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white px-1.5 rounded-full">
                        {carts.length}
                    </span>
                </div>

                
                <a className="hidden sm:block bg-linear-to-r from-indigo-600 to-violet-800 bg-clip-text text-transparent text-sm md:text-base">
                    Login
                </a>

               
                <a className="btn btn-sm md:btn-md rounded-full bg-linear-to-r from-indigo-600 to-violet-800 text-white px-4 md:px-6">
                    Get Started
                </a>

            </div>
        </div>
    );
};

export default Navbar;