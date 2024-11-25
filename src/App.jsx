import {Routes,Route} from 'react-router-dom'
import { Signup } from './pages/SignupPage'
import { Sigin } from './pages/Signinpage'
import {Home} from "./pages/Homepage"
import RequireAuth from "./utils/RequireAuth"

function App() {
  return (
    <>
      <Routes>

        <Route path='/'      element={<Signup/>}></Route>
        <Route path='/login' element= {<Sigin/>}></Route>

        {/* Secured Routes  */}
        <Route element={<RequireAuth/> } >
        
          <Route path='/home'  element={<Home/>}></Route>
        
        </Route>

        

      </Routes>
    </>
  )
}

export default App
