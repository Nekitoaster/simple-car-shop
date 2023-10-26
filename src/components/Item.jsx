import PropTypes from 'prop-types'

Item.propTypes = {
  item: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired,
  onShowItem: PropTypes.func.isRequired,
};

function Item({ item, onAdd, onShowItem }) {
  const {title, img, price, description} = item
  return (
    <div className="item">
      <img onClick={() => onShowItem(item)} src={`src/img/${img}`} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <b>{price} ₽</b>
      <div className="add-to-cart" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}

export default Item;
