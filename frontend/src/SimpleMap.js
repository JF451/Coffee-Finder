import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap = ({ businesses }) => {
  const coordinates = { lat: 33.9806, lng: -117.3755 };
  console.log(businesses, "test");

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
            <div lat={latitude} lng={longitude}>
              {item.name}
            </div>
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
