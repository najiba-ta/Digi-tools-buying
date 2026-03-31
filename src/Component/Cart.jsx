import { toast } from "react-toastify";
import { IoCartOutline } from "react-icons/io5";
const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successful!!")
    };

    const handleDelete = (item) => {
        const filterArray = carts.filter(c => c.id !== item.id)
        setCarts(filterArray)
        toast.warning("Product deleted")
    }
    return (
        <div className='border border-gray-300 rounded-lg p-8 max-w-7xl mx-auto'>
            <h2 className='text-2xl  font-bold'>Your Cart</h2>
            {
                carts.length === 0 ? <div className="grid grid-rows-1 justify-center">
                    <IoCartOutline className="w-50 h-50  text-gray-300" />
                    <p className='text-4xl text-gray-600 text-center items-center'>Your Cart Is Empty</p>

                </div>
                    :
                    <>
                        {carts.map((item) =>
                            <div className='flex justify-between items-center rounded-lg overflow-hidden p-3 mb-3 bg-blue-50' key={item.id}>
                                <div className='flex items-center gap-5'>
                                    <div>
                                        <img className='h-10 w-10 border border-neutral-400 rounded-full p-1' src={item.icon} alt="" />
                                    </div>
                                    <div>
                                        <div >
                                            <h2 className='text-2xl font-semibold'>{item.name}</h2>
                                        </div >
                                        <div className=' text-gray-500'>${item.price}/{item.period}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p onClick={() => handleDelete(item)} className='text-red-600'>Remove</p>
                                </div>
                            </div>)
                        }
                        <div className='flex justify-between border p-4 mt-5'>
                            <div className='text-gray-600'>Total :</div>
                            <div className='text-2xl font-bold'>${totalPrice}</div>
                        </div>
                        <button onClick={handlePayment} className='text-2xl font-bold text-white w-full bg-linear-to-r from-indigo-600 to-violet-800 rounded-full p-4 mt-4'>Proceed to Checkout</button>
                    </>
            }

        </div>

    );
};

export default Cart;

