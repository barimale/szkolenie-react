import './App.css'

type CartItem = {
  productName: string;
  price: number;
  quantity: number;
}

function App() {
  const items: Array<CartItem> = [
    {productName: 'item1',
      price: 20,
      quantity: 2
    },
    {productName: 'item2',
      price: 200,
      quantity: 3
    }
  ]

  const total = items.map(p=> p.price * p.quantity).reduce((a,b)=>a + b, 0);
  console.log(total)
  return (
    <>
      <div>
        <p>{total}</p>
      </div>
    </>
  )
}

export default App
