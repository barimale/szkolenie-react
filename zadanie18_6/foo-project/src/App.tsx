import './App.css'

type User = {
  id: number,
  name: string,
  email: string
}

type Order = {
  OrderId: number,
  UserId: number,
  items: [{
    productId: number,
    quantity: number
  }]
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

  // WIP
  function canProcessOrder(user: User | Admin): boolean {
    if (typeof user === "Admin") {
      return user.permissions.contains('process-orders') && user.role === 'admin'
    } else {
      return false;
    }
  }

  const valueA = canProcessOrder(userA);
  const valueB = canProcessOrder(adminA);

  return (
    <>
      <div>
        <p>valueA User: {valueA}</p>
        <p>valueB Admin: {valueB}</p>
      </div>
    </>
  )
}

export default App
