import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";

ShowItem.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onShowItem: PropTypes.func.isRequired,
};

function ShowItem({ item, onAdd, onShowItem }) {
  let {img, title, description, price} = item

  return (
    <div className="full-item">
      <div>
        <MdClose onClick={() => onShowItem(item)} className='close-icon'/>
        <img src={`src/img/${img}`} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <b>{price} ₽</b>
        <div className="add-to-cart" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
}

export default ShowItem;
