import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

Order.propTypes = {
  item: PropTypes.object.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

function Order({ item, onDelete }) {
  let { img, title, price, id } = item;

  return (
    <div className="item">
      <img src={`src/img/${img}`} alt={title} />
      <h4>{title}</h4>
      <b>{price} ₽</b>
      <MdDelete className='delete-icon' onClick={() => onDelete(id)}/>
      <hr />
    </div>
  );
}

export default Order;
