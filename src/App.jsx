import {Routes,Route} from 'react-router-dom'
import { Signup } from './pages/SignupPage'
import { Sigin } from './pages/Signinpage'

function App() {
  return (
    <>
      <Routes>

        <Route path='/'      element={<Signup/>}></Route>
        <Route path='/login' element= {<Sigin/>}></Route>

      </Routes>
    </>
  )
}

export default App
