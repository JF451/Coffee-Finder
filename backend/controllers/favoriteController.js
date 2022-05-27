const asyncHandler = require("express-async-handler");

const Favorite = require("../models/favoriteModel");

// @desc Get Favorites
//@route GET /api/favorites
//@access Private
const getFavorites = asyncHandler(async (req, res) => {
  const favorites = await Favorite.find();

  res.status(200).json({ favorites });
});

// @desc Set Favorites
//@route POST /api/favorites
//@access Private
const setFavorite = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Pleas add a text field");
  }

  const favorite = await Favorite.create({
    text: req.body.text,
  });

  res.status(200).json({ favorite });
});

// @desc Update Favorites
//@route PUT /api/favorites/:id
//@access Private
const updateFavorite = asyncHandler(async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);

  if (!favorite) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedFavorite = await Favorite.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json({ updatedFavorite });
});

// @desc Delete Favorites
//@route DELETE /api/favorites/:id
//@access Private
const deleteFavorite = asyncHandler(async (req, res) => {
  const favorite = await Favorite.findById(req.params.id);

  if (!favorite) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await favorite.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getFavorites,
  setFavorite,
  updateFavorite,
  deleteFavorite,
};
