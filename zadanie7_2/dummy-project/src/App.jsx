import './App.css'
import Gallery from './components/Gallery';
import { useState } from 'react';

function App() {
  const [bigImage, setBigImage] = useState({ alt: '', src: '' });

  const images = [
    {
      alt: 'dummy1',
      src: 'https://cdn.pixabay.com/photo/2024/11/05/20/59/artistic-9176859_1280.jpg'
    },
    {
      alt: 'dummy2',
      src: 'https://cdn.pixabay.com/photo/2023/03/10/17/52/prayer-book-7842864_1280.jpg'
    },
    {
      alt: 'dummy3',
      src: 'https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_640.jpg'
    }];

  const show = (item) => {
    setBigImage(item);
  };

  return (
    <>
      <header>
      </header>
      <div>
        <img src={bigImage.src} alt={bigImage.alt} style={{ width: '300px', height: 'auto' }} />
        <br />
        <Gallery show={show} images={images} />
      </div>
      <footer>
      </footer>
    </>
  )
}

export default App
