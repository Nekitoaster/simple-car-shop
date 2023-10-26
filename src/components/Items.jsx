import PropTypes from 'prop-types'
import Item from './Item'

Items.propTypes = {
    items: PropTypes.object.isRequired,
    onAdd: PropTypes.func.isRequired,
    onShowItem: PropTypes.func.isRequired,
}

function Items({items, onAdd, onShowItem}) {

  return (
    <main>
      {items.map((el) => (
        <Item item={el} key={el.id} onAdd={onAdd} onShowItem={onShowItem} />
      ))}
    </main>
  );
}

export default Items