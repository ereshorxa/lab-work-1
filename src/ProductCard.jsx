import { useState } from 'react'

function ProductCard(props) {
  const [count, setCount] = useState(0)

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={props.image} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <button onClick={() => setCount(count + 1)}>
        Добавить в корзину
      </button>
      <p className="count">В корзине: {count}</p>
    </article>
  )
}

export default ProductCard
