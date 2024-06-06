import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";

function MapSpace() {
  const [data, setData] = useState([]);
  const bearerToken = import.meta.env.VITE_BEARER;


  useEffect(() => {
    const fetchData = async () => {
      const response = {
        method: "GET",
        url: "https://apis.kustplace.com/v3/2700/shops",
        headers: {
          Authorization: `Bearer ${bearerToken}`, // Ensure bearerToken is defined somewhere in your component
        }
      };
      try {
        const result = await axios.request(response);
        console.log(result.data);
        console.log(result.data.data);
        // result.data.data.forEach((item) => {
        //   console.log(item.address.city);
        // });
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const position = { lat: 46.41256397474785, lng: 2.1884029694087452 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
      <div style={{ height: "700px", width: "100%" }}>
        <Map defaultZoom={10} defaultCenter={position}></Map>
      </div>
    </APIProvider>
  );
}

export default MapSpace;
