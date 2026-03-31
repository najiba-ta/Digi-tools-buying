import Navbar from "./Component/Navbar"
import Banner from "./Component/Banner"
import Stats from "./Component/Stats"
import Footer from "./Component/Footer"
import Woekflow from "./Component/Woekflow"
import Pricing from "./Component/Pricing"
import Digitools from "./Component/Digitools"
import Tools from "./Component/Tools"
import Cart from "./Component/Cart"
import { useState } from "react"


const getModels = async () => {
  const res = await fetch("/models.json")
  return res.json()
}
const modelPromise = getModels()
function App() {
  const [activeTab, setActiveTab] = useState("products")
  const [carts, setCarts] = useState([])
  console.log(carts);
  return (
    <>
      <Navbar carts ={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center py-10 bg-transparent">
        <div className="rounded-full border border-gray-200">
          <input type="radio" name="my_tabs_1" className={`tab rounded-full font-medium text-sm w-40 ${activeTab === "products"
              ? "bg-linear-to-r from-indigo-600 to-violet-800  text-white"
              : "text-gray-500"
            }`} aria-label="Product" onClick={() => setActiveTab("products")} defaultChecked />
          <input type="radio" name="my_tabs_1" className={`tab rounded-full font-medium text-sm w-40 ${activeTab === "cart"
              ? "bg-linear-to-r from-indigo-600 to-violet-800 uration-300 text-white"
              : "text-gray-500"
            }`} aria-label={`Carts (${carts.length})`} onClick={() => setActiveTab("cart")} />
        </div>
      </div>
      {activeTab === "products" && <Tools modelPromise={modelPromise} carts={carts} setCarts={setCarts}></Tools>}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      <Digitools></Digitools>
      <Pricing></Pricing>
      <Woekflow></Woekflow>
      <Footer></Footer>
    </>
  )
}

export default App
