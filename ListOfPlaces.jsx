import { useState, useEffect } from "react";
import PlaceCard from "./PlaceCard";
import { API } from "../../constants/strapiApi";

function ListOfPlaces() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fecthData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setPlaces(json);
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
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="places">
      {places.map(function (places) {
        const { id, name, price, rating, distance, type, favorite } = places;

        return (
          <PlaceCard
            key={id}
            id={id}
            name={name}
            price={price}
            rating={rating}
            distance={distance}
            type={type}
            favorite={favorite}
          />
        );
      })}
    </div>
  );
}

export default ListOfPlaces;
