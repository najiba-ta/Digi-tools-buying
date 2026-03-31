import { use } from "react";
import Modelcart from "./Modelcart";

const Tools = ({ modelPromise,carts,setCarts }) => {
    const models = use(modelPromise)

    return (
        <div className="py-10 max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-bold ">Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed <br></br>to boost your productivity and creativity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-15">
                {models.map(model => 
                <Modelcart key={model.id} model={model} carts={carts} setCarts = {setCarts}></Modelcart>
                )}
            </div>
        </div>
    );
};

export default Tools;