import './App.css'
import ProfileCard from './components/ProfileCard';

function App() {
  const people = [
    {
      name: 'John',
      surname: 'Doe',
      description: 'lorem ipsum',
      isHighlighted: false
    },
    {
      name: 'Jane',
      surname: 'Doe',
      description: 'lorem ipsum2',
      isHighlighted: true
    }
  ];
  return (
    <>
      <header>
      </header>
      <>
        {people.map((item, index) => {
          return <ProfileCard
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
