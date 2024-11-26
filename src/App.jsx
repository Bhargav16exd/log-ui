import {Routes,Route} from 'react-router-dom'
import { Signup } from './pages/SignupPage'
import { Sigin } from './pages/Signinpage'
import {Home} from "./pages/Homepage"
import RequireAuth from "./utils/RequireAuth"
import { Newpostpage } from './pages/Newpostpage'
import { Adminpage } from './pages/Adminpage'

function App() {
  return (
    <>
      <Routes>

        <Route path='/'      element={<Signup/>}></Route>
        <Route path='/login' element= {<Sigin/>}></Route>

        {/* Secured Routes  */}
        <Route element={<RequireAuth/> } >
        
          <Route path='/home'  element={<Home/>}></Route>
          <Route path='/newpost' element={<Newpostpage/>}></Route>
          <Route path='/admin' element={<Adminpage/>}></Route>
        
        </Route>

        

      </Routes>
    </>
  )
}

export default App
