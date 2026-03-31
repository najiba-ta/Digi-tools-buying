import { useState } from "react";
import { toast } from "react-toastify";
import { IoMdCheckmark } from "react-icons/io";;

const Modelcart = ({ model, carts, setCarts }) => {

    const [isBuyNow, setIsAdded] = useState(false)
    const handleButton = () => {
        setIsAdded(true)
        const isFound = carts.find(item => item.id === model.id)
        if (isFound) {
            toast.error("Item already in cart!")
            return
        }
        setCarts([...carts, model])
        toast.success("Added to cart")
        return
    }
    return (
        <div className="shadow-lg rounded-lg border border-gray-200 p-5 max-w-7xl mx-auto hover:bg-blue-50 transition">
            <div className="flex justify-between">
                <img className="w-10 h-10 border border-mist-200 rounded-full p-1" src={model.icon} alt="" />
                <p
                    className={`flex items-center px-2 py-1 rounded text-sm font-medium ${model.tagType?.toLowerCase() === "best seller"
                            ? "bg-amber-100 text-amber-700"
                            : model.tagType?.toLowerCase() === "popular"
                                ? "bg-purple-100 text-purple-700"
                                : model.tagType?.toLowerCase() === "new"
                                    ? "bg-emerald-100 text-emerald-700"
                                    : "bg-gray-200 text-gray-700"
                        }`}
                >
                    {model.tagType}
                </p>
            </div>
            <div className="flex-1 p-4 space-y-5">
                <div>
                    <h2 className="text-2xl font-bold">{model.name}</h2>
                    <p>{model.description}</p>
                </div>
                <div>
                    <h2 className="font-bold">${model.price}<span>/{model.period}</span></h2>
                    {model.features.map((feature, index) => (
                        <p className="flex" key={index}><IoMdCheckmark className="text-green-500" />{feature} </p>
                    ))}
                </div>
                <div className="flex justify-center mt-5">
                    <button onClick={handleButton} className="btn w-full rounded-full bg-linear-to-r from-indigo-600 to-violet-800 text-white py-2 px-20">{isBuyNow ? "Added to cart" : "Buy Now"}</button>
                </div>
            </div>
        </div>
    );
};

export default Modelcart;