import './App.css'

type Book = {
  title: string,
  author: string,
  isRead: boolean
}

function App() {
  const books: Array<Book> = [
    {
      title: 'titleA',
      author: 'author1',
      isRead: true
    },
    {
      title: 'titleB',
      author: 'author2',
      isRead: false
    },
    {
      title: 'titleC',
      author: 'author2',
      isRead: true
    }
  ];

  const readOnly = books.filter(p => p.isRead);

  return (
    <>
      <div>
        {readOnly.map((item, index) => {
          return <p key={index}>{item.title}</p>
        })}
      </div>
    </>
  )
}

export default App
