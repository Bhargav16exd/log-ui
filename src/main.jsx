import store from './redux/store.js'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

)