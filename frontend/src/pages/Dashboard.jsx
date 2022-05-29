import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import FavoriteForm from "../components/FavoriteForm";
import { getFavorites, reset } from "../features/favorites/favoritesSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { favorites, isLoading, isError, message } = useSelector(
    (state) => state.favorites
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    // dispatch(getFavorites());

    // return () => {
    //   dispatch(reset());
    // };
  }, [user, navigate, isError, message, dispatch]);

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Favorites Dashboard</p>
      </section>
      <FavoriteForm />
    </>
  );
}

export default Dashboard;
