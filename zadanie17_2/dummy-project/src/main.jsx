import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'  // Import Provider
import { store } from './store/index'   // Import Store

createRoot(document.getElementById('root')).render(
  <Provider store={store}> {/* Redux Provider wraps the App */}
    <App />
  </Provider>
  ,
)
