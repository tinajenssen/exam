import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import star from "../../img/star.png";

function PlaceCard({ id, name, price, rating, distance, url, type, favorite }) {
  return (
    <Link to={`detail/${id}`} className="card">
      <div className="image">
        <img src={url} alt="" />
      </div>
      <div className="name">{name}</div>
      <div className="distance">{distance} km from centre</div>
      <div className="test">
        <div className="price">Starting from {price} NOK</div>
        <div className="rating">
          <img src={star} className="star" alt="logo" />
          {rating}
        </div>
      </div>
    </Link>
  );
}

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PlaceCard;
