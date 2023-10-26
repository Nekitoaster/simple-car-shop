import { useState } from 'react';
import PropTypes from "prop-types";

Categories.propTypes = {
  chooseCategory: PropTypes.func.isRequired,
};

function Categories({chooseCategory}) {
  let [categories] = useState([
    {
      key: 'всё',
      name: 'Всё'
    },
    {
      key: 'седан',
      name: 'Седаны'
    },
    {
      key: 'внедорожник',
      name: 'Внедорожники'
    },
    {
      key: 'купе',
      name: 'Купе'
    },
    {
      key: 'минивэн',
      name: 'Минивэны'
    },
  ])

  return <div className='categories'>
    {categories.map(el => (
      <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
    ))}
  </div>;
}

export default Categories;
