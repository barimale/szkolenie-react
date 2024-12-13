import './App.css'

type User = {
  id: number,
  name: string,
  email: string
}

type Order = {
  OrderId: number,
  UserId: number,
  items: Product[]
}

type Product ={
    productId: number,
    quantity: number
  }

type Admin = User & { role: string, permissions: Array<string> }

function App() {

  const userA: User = {
    id: 1,
    name: 'Joe',
    email: 'Joe@gmail.com'
  }

  const adminA: Admin = {
    id: 2,
    name: 'John',
    email: 'john@gmail.com',
    role: 'admin',
    permissions: ['process-orders']
  }

  function canProcessOrder(user: User | Admin): boolean {
    if ((user as Admin).role === 'admin' && Array.isArray((user as Admin).permissions)) {
      return (user as Admin).permissions.includes('process-orders')
    } else {
      return false;
    }
  }

  const valueA = canProcessOrder(userA);
  const valueB = canProcessOrder(adminA);

  return (
    <>
      <div>
        <p>valueA User: {JSON.stringify(valueA)}</p>
        <p>valueB Admin:  {JSON.stringify(valueB)}</p>
      </div>
    </>
  )
}

export default App
