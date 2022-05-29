import axios from "axios";

const API_URL = "http://localhost:8000/api/favorites/";

//Create new favorite

const createFavorite = async (favoriteData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  var qs = require("qs");

  var data = qs.stringify({
    name: favoriteData.name,
    address: favoriteData.location["address1"],
    phone: favoriteData.display_phone,
    rating: favoriteData.rating.toString(),
    price: favoriteData.price,
  });

  console.log(favoriteData);
  const response = await axios.post(API_URL, data, config);

  return response.data;
};

//Get user favorites
const getFavorites = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const favoritesService = {
  createFavorite,
  getFavorites,
};

export default favoritesService;
