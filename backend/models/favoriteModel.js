const mongoose = require("mongoose");

/*
Add more to this schema
*/
const favoriteSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      require: [true, "Please add a text value"],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
    rating: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorites", favoriteSchema);
