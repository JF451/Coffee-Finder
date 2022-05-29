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

  const response = await axios.post(API_URL, data, config);
  console.log(response.data);

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

//delete user goal
const deleteFavorite = async (favoriteId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + favoriteId, config);

  return response.data;
};

const favoritesService = {
  createFavorite,
  getFavorites,
  deleteFavorite,
};

export default favoritesService;
