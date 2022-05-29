import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { FaCoffee } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { createFavorite } from "../features/favorites/favoritesSlice";

const SimpleMap = ({ businesses }) => {
  const coordinates = { lat: 33.9806, lng: -117.3755 };
  console.log(businesses, "test");

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleClick = (item) => {
    // //Want to add to favorites on a click
    // setText(item.alias);
    // dispatch(createFavorite({ text }));
    // setText("");
    console.log(item);
    dispatch(createFavorite(item));
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBmj1oOKHHNMoVaW9JnpmwLiwtK1gFthFE" }}
        defaultCenter={coordinates}
        defaultZoom={10}
      >
        {businesses?.map((item) => {
          let longitude = item.coordinates.longitude;
          let latitude = item.coordinates.latitude;

          return (
            <div
              lat={latitude}
              lng={longitude}
              onClick={() => handleClick(item)}
            >
              <FaCoffee />
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
