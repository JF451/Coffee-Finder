import React from "react";
import GoogleMapReact from "google-map-react";

const SimpleMap = (props) => {
  const coordinates = { lat: 59.955, lng: 30.337 };
  console.log(props);

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBmj1oOKHHNMoVaW9JnpmwLiwtK1gFthFE" }}
        defaultCenter={coordinates}
        defaultZoom={10}
      >
        <div
          lat={59.955413}
          lng={30.337844}
          style={{ fontSize: "50px", color: "dodgerblue" }}
        >
          Hi
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
