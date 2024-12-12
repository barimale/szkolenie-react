import './App.css'

type User = {
  id: number,
  name: string,
  email: string
}

type Order = {
  orderId: number,
  userId: number,
  totalAmount: number
}

function getOrdersForUser(orders: Order[], userId: number): Order[] {
  return orders.filter(p => p.userId === userId);
}

function getUserById(users: User[], userId: number): User | undefined {
  return users.find(p => p.id === userId);
}

function getTotalAmountForUser(orders: Order[], userId: number): number {
  return orders
    .filter(p => p.userId === userId)
    .map(p => p.totalAmount)
    .reduce((a, b) => a + b, 0);
}

const userA: User = {
  id: 1,
  name: 'ads',
  email: 'das'
}

const users: User[] = [userA];

const orders: Order[] =
  [
    {
      orderId: 1,
      userId: 1,
      totalAmount: 100
    },
    {
      orderId: 2,
      userId: 1,
      totalAmount: 1000
    },
    {
      orderId: 3,
      userId: 1,
      totalAmount: 2100
    }
  ]

function App() {
  const result1 = getOrdersForUser(orders, 1);
  const result2 = getUserById(users, 1);
  const result3 = getTotalAmountForUser(orders, 1);


  return (
    <>
      <div>
        <p>{JSON.stringify(result1)}</p>
        <p>{JSON.stringify(result2)}</p>
        <p>{JSON.stringify(result3)}</p>
      </div>
    </>
  )
}

export default App
