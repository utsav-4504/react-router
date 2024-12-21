import { StrictMode, useState } from 'react'
import './App.css'
import { BrowserRouter,  Routes , Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contect from './Contect.jsx'
import CustomNavbar from './CustomNavbar.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StrictMode>
      <BrowserRouter>
      <CustomNavbar/>
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contect' element={<Contect />} />
      </Routes>
      </BrowserRouter>
     </StrictMode>
    </>
  )
}

export default App
