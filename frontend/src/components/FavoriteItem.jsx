import { useDispatch } from "react-redux";
import { deleteFavorite } from "../features/favorites/favoritesSlice";

function FavoriteItem({ favorite }) {
  const dispatch = useDispatch();
  return (
    <div className="favorite">
      <div>{new Date(favorite.createdAt).toLocaleDateString("en-US")}</div>
      <h2>{favorite.name}</h2>
      <button
        onClick={() => dispatch(deleteFavorite(favorite._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default FavoriteItem;
