import { useState } from "react";
import { useDispatch } from "react-redux";
import { createFavorite } from "../features/favorites/favoritesSlice";

function FavoriteForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createFavorite({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Favorite</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Favorite
          </button>
        </div>
      </form>
    </section>
  );
}

export default FavoriteForm;
