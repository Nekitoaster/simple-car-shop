import { useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import Order from './Order';
import PropTypes from 'prop-types'

Header.propTypes = {
  orders: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function Header({orders, onDelete}) {
  let [cartOpen, setCartOpen] = useState(false);
  let summ = 0;
  orders.forEach(
    (el) => (summ += Number.parseInt(el.price.replace(/ /g, "")))
  );

  const showOrders = () => {
    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} key={el.id} item={el} />
        ))}
        <p className="summ">
          Итог: {summ.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽
        </p>
      </div>
    );
  }

  const showNothing = () => {
    return <div className="empty">
      <h2>Корзина пуста!</h2>
    </div>
  }

  return (
    <header>
      <div>
        <span className="logo">AutoHaven Hub</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <MdShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && <div className="shop-cart">
          {orders.length > 0 ? showOrders() : showNothing()}
        </div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
