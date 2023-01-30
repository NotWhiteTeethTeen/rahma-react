import { markers, center } from "../data/fridges";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { useState } from "react";
import InfoBox from "./InfoBox";

const Map = ({setServerData}) => {

const [displaytext, setDisplaytext] = useState(null);
 

  async function sendRequest (){
      try{
        console.log('req sent');
        let req = await fetch("http://localhost:5000/api/fridges");
        const res =  await req.text();
        setServerData(res);
        console.log(res);
      }
      catch(error){
        console.log(error);
      }
  }






const mapMarkers = markers.map((marker) => {
    return(
        <Marker text={marker.name}
        onClick={async()=>{setDisplaytext(marker); sendRequest()}}
        lat={marker.coordinates.lat}
        lng={marker.coordinates.lng}/>
    );
})

  return (
    <div className="relative w-full h-96">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDOvs1mDjda5i-chLsSimeVBGucp-O8ZTE" }}
        defaultCenter={center}
        defaultZoom={14}
      >

        {mapMarkers}

      </GoogleMapReact>

      { displaytext && <InfoBox displaytext={displaytext}/>}

    </div>
  );
};
export default Map;
