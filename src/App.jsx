import ProductCard from './ProductCard'
import './App.css'

function App() {
  return (
    <main className="shop">
      <h1>Магазин игровых девайсов</h1>
      <p className="subtitle">Выбери всё необходимое для игры</p>

      <div className="products">
        <ProductCard
          name="Игровая мышь"
          price="3 490 ₽"
          image="/device.svg"
        />
        <ProductCard
          name="Механическая клавиатура"
          price="6 990 ₽"
          image="/device.svg"
        />
        <ProductCard
          name="Игровые наушники"
          price="4 590 ₽"
          image="/device.svg"
        />
      </div>
    </main>
  )
}

export default App
