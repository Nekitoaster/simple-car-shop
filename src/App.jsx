import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";
import { v4 as uuidv4 } from 'uuid';
import Categories from './components/Categories';
import ShowItem from './components/ShowItem';

function App() {
  const [items] = useState([
    {
      id: uuidv4(),
      title: "Mercedes-Maybach GLS 600 4MATIC",
      img: "mercedes-maybach.jpg",
      description:
        "Mercedes-Maybach GLS излучает изысканность благодаря своей беспрецедентной элегантности, комфорту и впечатляющим дизайнерским особенностям, таким как решетка с вертикальными полосками. Воплощая в себе фирменное мастерство Maybach в каждой детали для поистине роскошного опыта.",
      brand: "mercedes",
      category: "внедорожник",
      price: "28 940 000",
    },
    {
      id: uuidv4(),
      title: "Mercedes-Benz S-Класс",
      img: "mercedes-s.jpg",
      description:
        "Главное в новом седане S-Класса – уникальный комфорт и технологии безопасности, на которые вы всегда можете рассчитывать и как водитель, и как пассажир.",
      brand: "mercedes",
      category: "седан",
      price: "18 123 000",
    },
    {
      id: uuidv4(),
      title: "Mercedes-Benz V-Класс",
      img: "mercedes-v.jpg",
      description:
        "Современный дизайн, высокопроизводительные и экономичные дизельные двигатели, превосходные динамические ходовые качества, изысканный интерьер салона, ставшего эталоном современного понимания роскоши.",
      brand: "mercedes",
      category: "минивэн",
      price: "11 651 000",
    },
    {
      id: uuidv4(),
      title: "Toyota Camry",
      img: "toyota-camry.jpg",
      description:
        "Стильный дизайн с динамичными линиями кузова, эффектная форма переднего бампера, решетка радиатора с боковой серебристой окантовкой, новые цвета экстерьера и уникальный двухцветный окрас кузова для специальной серии GR SPORT — все это подчеркивает выразительный облик бизнес-седана.",
      brand: "toyota",
      category: "седан",
      price: "4 600 000",
    },
    {
      id: uuidv4(),
      title: "Toyota Land Cruiser",
      img: "toyota-land-cruiser.jpg",
      description:
        "Land Cruiser возвращает ощущение волнения и восторга от исследования незнакомых мест благодаря своим удивительным возможностям и легендарной надежности, при этом отдавая дань своим историческим корням, пройдя более чем 65 лет. Независимо от того, покоряете ли вы грубые тропы или крутитесь по городским улицам, Land Cruiser приносит динамичную энергию в любое приключение.",
      brand: "toyota",
      category: "внедорожник",
      price: "10 900 000",
    },
    {
      id: uuidv4(),
      title: "Toyota Alphard",
      img: "toyota-alphard.jpg",
      description:
        "Toyota Alphard сам откроет вам двери, чтобы вы могли оценить его по достоинству. Впечатляющая управляемость, изысканный и продуманный интерьер, футуристичный силуэт — флагман линейки пассажирских автомобилей Toyota был создан с пристальным вниманием к каждой детали.",
      brand: "toyota",
      category: "минивэн",
      price: "5 566 000",
    },
    {
      id: uuidv4(),
      title: "Audi A4",
      img: "audi-a4.jpg",
      description:
        "Audi давно известен своими высококачественными и высокопроизводительными автомобилями, и их последнее предложение в линейке не исключение. С функциями, такими как помощь водителю с живой информацией о безопасности и бесплатным приложением для смартфона, Audi A4 отличное дополнение к коллекции любого водителя.",
      brand: "audi",
      category: "седан",
      price: "4 950 000",
    },
    {
      id: uuidv4(),
      title: "Audi Q8",
      img: "audi-q8.jpg",
      description:
        "Audi Q8 — это флагманский кроссовер от немецкого автопроизводителя, который сочетает в себе роскошь, комфорт и технологичность. Это автомобиль для тех, кто ценит высокое качество, инновационное оснащение и динамичный дизайн.",
      brand: "audi",
      category: "внедорожник",
      price: "6 520 000",
    },
    {
      id: uuidv4(),
      title: "Audi RS5",
      img: "audi-rs5.jpg",
      description:
        "Audi RS5 - воплощение уникального сочетания мощи и элегантности. С мощным 2.9-литровым V6 битурбо-двигателем, RS5 доставляет невероятные 450 л.с. и ускорение 0-100 км/ч за 3.9 секунды. Инновационные технологии и внимание к деталям создают непередаваемый опыт вождения. Эта купе предлагает легкость и скорость, сочетаясь с выдающимися стилем и комфортом Audi. RS5 - это исключительная машина для ценителей автомобилей.",
      brand: "audi",
      category: "купе",
      price: "5 540 000",
    },
    {
      id: uuidv4(),
      title: "Lamborghini Urus",
      img: "lamborghini-urus.jpg",
      description:
        "Lamborghini Urus – это первый в мире суперспортивный внедорожник, в котором роскошь, спортивный дух и высокие эксплуатационные свойства сочетаются с комфортом и универсальностью, обеспечивая наилучшие для данной категории автомобилей динамические характеристики, уникальный дизайн и непревзойденную элегантность.",
      brand: "lamborghini",
      category: "внедорожник",
      price: "41 300 000",
    },
    {
      id: uuidv4(),
      title: "Lamborghini Aventador",
      img: "lamborghini-aventador.jpg",
      description:
        "Lamborghini Aventador - это воплощение совершенства и элегантности в мире автомобилей. Сочетая в себе агрессивный дизайн и передовые технологии, этот спортивный автомобиль обладает непревзойденной мощностью и динамикой. Он оснащен новейшими инновациями, такими как улучшенная аэродинамика и усовершенствованная система управления. Lamborghini Aventador - это воплощение роскоши и скорости, которое оставляет незабываемые впечатления от каждой поездки.",
      brand: "lamborghini",
      category: "купе",
      price: "65 000 000",
    },
    {
      id: uuidv4(),
      title: "BMW X5",
      img: "bmw-x5.jpg",
      description:
        "BMW X5 – это автомобиль со спортивным дизайном, сочетающий в себе исключительный комфорт и инновационные решения.",
      brand: "bmw",
      category: "внедорожник",
      price: "9 499 000",
    },
    {
      id: uuidv4(),
      title: "BMW M5",
      img: "bmw-m5.jpg",
      description:
        "Автомобили M BMW 5 серии впечатляющим образом сочетают в себе фирменную спортивность BMW M с комфортом и элегантностью седана бизнес-класса.",
      brand: "bmw",
      category: "седан",
      price: "12 800 000",
    },
    {
      id: uuidv4(),
      title: "BMW M850i",
      img: "bmw-850i.jpg",
      description:
        "Автомобили M BMW 8 серии Coupe доставят Вам максимальное удовольствие от вождения в атмосфере спортивного стиля и роскоши как на дорогах, так и на гоночной трассе.",
      brand: "bmw",
      category: "купе",
      price: "14 500 000",
    },
    {
      id: uuidv4(),
      title: "Subaru WRX STI",
      img: "subaru-wrx-sti.jpg",
      description:
        "STI — это высокопроизводительный брат WRX. Седан Subaru WRX второго поколения дебютирует в 2023 году с обновленным кузовом, дизайном экстерьера и интерьера, а также модернизированным двигателем.",
      brand: "subaru",
      category: "седан",
      price: "6 900 000",
    },
    {
      id: uuidv4(),
      title: "Subaru Forester",
      img: "subaru-forester.jpg",
      description:
        "В модельном ряду японского производителя Subaru представлено немало оригинальных автомобилей. Одним из таких является кроссовер Forester, который сегодня представлен в качестве рестайлинговой модели пятого поколения. В результате обновления автомобиль стал более просторным и комфортным.",
      brand: "subaru",
      category: "внедорожник",
      price: "5 500 000",
    },
    {
      id: uuidv4(),
      title: "Lexus LM",
      img: "lexus-lm.jpg",
      description:
        "Новый Lexus LM — роскошный флагманский минивэн. Автомобиль отличается высоким уровнем комфорта и призван стать идеальным пространством для релаксации. Благодаря большим сиденьям в авиационном стиле, которые можно перевести в полностью горизонтальное положение, четырехместная версия выводит философию гостеприимства Омотенаши на новый уровень.",
      brand: "lexus",
      category: "минивэн",
      price: "19 615 000",
    },
    {
      id: uuidv4(),
      title: "Lexus ES 350",
      img: "lexus-es-350.jpg",
      description:
        "Седан ES 350 подходит для людей, которые ценят тихий салон и комфортную посадку. В 2023 году для этого автомобиля производитель Lexus начал устанавливать новый сенсорный экран с информационно-развлекательной системой, а тачпад навсегда исчез из центральной консоли.",
      brand: "lexus",
      category: "седан",
      price: "6 100 000",
    },
  ]);
  let [orders, setOrders] = useState([]);
  let [currentItems, setCurrentItems] = useState([...items])
  let [showItem, setShowItem] = useState(false)
  let [fullItem, setFullItem] = useState({})

  function deleteOrder(id) {
    setOrders(orders.filter(el => el.id !== id))
  }

  function addToOrder(item) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item]);
  }

  function chooseCategory(category) {
    if(category === 'всё') {
      setCurrentItems(items)
      return
    }

    setCurrentItems(items.filter(el => el.category === category))
  }

  function onShowItem (item) {
    setFullItem(item)
    setShowItem(!showItem)
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory}/>
      <Items items={currentItems} onAdd={addToOrder} onShowItem={onShowItem}/>
      {showItem && <ShowItem item={fullItem} onAdd={addToOrder} onShowItem={onShowItem}/>}
      <Footer />
    </div>
  );
}

export default App;
