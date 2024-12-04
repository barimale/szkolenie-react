import './App.css'
import Card from './components/Card';

function App() {
  const people = [
    {
      name: 'John',
      surname: 'Doe',
      description: 'lorem ipsum',
      isHighlighted: true
    },
    {
      name: 'Jane',
      surname: 'Doe',
      description: 'lorem ipsum2',
      isHighlighted: false
    }
  ];
  return (
    <>
      <header>
      </header>
      <>
        {people.map((item, index) => {
          return <Card
            key={index}
            name={item.name}
            surname={item.surname}
            description={item.description}
            isHighlighted={item.isHighlighted}
          />

        })}
      </>
      <footer>
      </footer>
    </>
  )
}

export default App
