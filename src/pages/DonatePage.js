import { useState } from "react";
import Map from "../components/Map";

const DonatePage = () => {

    const [serverData, setServerData] = useState();

    return(
        <div className="container mx-auto px-6 mt-10">
            
            <h1 className="text-xl mb-4">Select a fridge</h1>
            <Map setServerData={setServerData}/>

            {serverData}
        </div>

    );
}

export default DonatePage;