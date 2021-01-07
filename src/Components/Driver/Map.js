import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import {Maplocations} from '../Business/Data'
import LocationDetails from './LocationDetails';
import Strike from '../../Image/assests/Path 1279.svg'
const MapContainer = () => {
  const [selected, isSelected] = useState()

  const onSelect = item => isSelected(item);

  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
    <>
     <LoadScript
       googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
          {
            Maplocations.map( item => {
              return <Marker
               key={item.name}
                position={item.location}
                onClick={ () => onSelect(item) }
                />
            })
          }
           {
            selected?.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => isSelected({})}
            >
              <LocationDetails/>
               </InfoWindow>
            ) 
         }
        </GoogleMap>
     </LoadScript>
     <div className="svg-ic">
     <input type="button" className="login-btn driver-delivery" value="Accept Delivery"/>
     <img className="strike" src={Strike} alt="accept"/>
     </div>
     <input type="button" className="login-btn driver-decline" value="Decline Delivery"/>

     </>
  )
}
export default MapContainer