const asyncHandler = require("express-async-handler");

// @desc Get Favorites
//@route GET /api/favorites
//@access Private
const getFavorites = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Favorites" });
});

// @desc Set Favorites
//@route POST /api/favorites
//@access Private
const setFavorite = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Pleas add a text field");
  }

  res.status(200).json({ message: "Set Favorites" });
});

// @desc Update Favorites
//@route PUT /api/favorites/:id
//@access Private
const updateFavorite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Favorite ${req.params.id}` });
});

// @desc Delete Favorites
//@route DELETE /api/favorites/:id
//@access Private
const deleteFavorite = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Deleted ${req.params.id}` });
});

module.exports = {
  getFavorites,
  setFavorite,
  updateFavorite,
  deleteFavorite,
};
