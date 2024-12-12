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

function App() {


  return (
    <>
      <div>
      </div>
    </>
  )
}

export default App
