import './App.css'

type Product<T> = {
  id: number,
  name: string,
  data: T
}

type Warehouse<T> = Array<Product<T>>;

function App() {

  function addProduct<T>(warehouse: Warehouse<T>, product: Product<T>): Warehouse<T> {
    warehouse.push(product);

    return warehouse;
  }

  function findProductById<T>(warehouse: Warehouse<T>, id: number): Product<T> | undefined {
    return warehouse.find(p => p.id === id);
  }

  const productA: Product<number> =
  {
    id: 1,
    name: 'name1',
    data: 100
  }

  const productB: Product<number> =
  {
    id: 2,
    name: 'name2',
    data: 1002
  }

  let warehouse: Warehouse<number> = [
    productA, productB
  ];

  const productC: Product<number> =
  {
    id: 3,
    name: 'name3',
    data: 10
  }

  warehouse = addProduct<number>(warehouse, productC);
  const result = findProductById(warehouse, 3);

  return (
    <>
      <div>
        <p>{JSON.stringify(result)}</p>
      </div>
    </>
  )
}

export default App
