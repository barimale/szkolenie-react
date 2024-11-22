import './App.css'
import Navigation from './components/Navigation';
import Section from './components/Section';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Section title='Title 1' description='description 1' imgProps={{ alt: 'img1', src: 'https://media.istockphoto.com/id/1254350031/pl/zdj%C4%99cie/m%C5%82oda-kobieta-ciesz%C4%85c-si%C4%99-lawendowym-polem-o-zachodzie-s%C5%82o%C5%84ca.jpg?s=612x612&w=0&k=20&c=p-uGZPgioTum0gulRTXJMTFBuRVoq5EfNMfs6mW0gZg=' }} />
      <Section title='Title 2' description='description 2' imgProps={{ alt: 'img2', src: 'https://media.istockphoto.com/id/1314978433/pl/zdj%C4%99cie/m%C5%82oda-radosna-kobieta-na-lawendowym-polu.jpg?s=612x612&w=0&k=20&c=xzjVfm0kbZ9O4lEIOS-wTIwnTIZg3xBR0IkXotfg8Is=' }} />
      <Section title='Title 3' description='description 3' imgProps={{ alt: 'img3', src: 'https://media.istockphoto.com/id/1022527876/pl/zdj%C4%99cie/samotna-dziewczyna-na-lawendowym-polu-%C5%9Bwiat%C5%82o-s%C5%82oneczne-po-lewej-stronie-i-krzaki-po-prawej.jpg?s=612x612&w=0&k=20&c=qPUzk9vW-1LiqCQhCerOn6K-1rGFSBLLfMT5pYpgei0=' }} />
      <footer>
        <Navigation />
      </footer>
    </>
  )
}

export default App
