import {Routes,Route} from 'react-router-dom'
import { Signup } from './pages/SignupPage'
import { Sigin } from './pages/Signinpage'
import {Home} from "./pages/Homepage"
import RequireAuth from "./utils/RequireAuth"
import { Newpostpage } from './pages/Newpostpage'
import { Adminpage } from './pages/Adminpage'
import Checkban from './utils/Checkban'
import { YouAreBanned } from './pages/Youareban'

function App() {
  return (
    <>
      <Routes>

        <Route path='/'      element={<Signup/>}></Route>
        <Route path='/login' element= {<Sigin/>}></Route>
        <Route path='/ban' element={<YouAreBanned/>}></Route>

        {/* Secured Routes  */}
        <Route element={<RequireAuth/> } >

            <Route element={<Checkban/>}>

              <Route path='/home'  element={<Home/>}></Route>
              <Route path='/newpost' element={<Newpostpage/>}></Route>
              <Route path='/admin' element={<Adminpage/>}></Route>

            </Route>
        
           
        
        </Route>

        

      </Routes>
    </>
  )
}

export default App
