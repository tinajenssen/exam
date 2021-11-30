import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../../constants/strapiApi";

function PlaceDetail() {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { id } = useParams();

  if (!id) {
    history.push("/");
  }

  const url = API + "/" + id;

  useEffect(
    function () {
      async function fecthData() {
        try {
          const response = await fetch(url);

          if (response.ok) {
            const json = await response.json();
            console.log(json);
            setPlace(json);
          } else {
            setError("An error occured");
          }
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      fecthData();
    },
    [url]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="place-detail">
      <div className="name">{place.name}</div>
      <div className="price">{place.price},-</div>
      <div className="distance">{place.distance}</div>
    </div>
  );
}

export default PlaceDetail;
