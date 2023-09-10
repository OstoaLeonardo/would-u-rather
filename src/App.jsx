import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Questions } from './pages/Questions'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/game' element={<Questions />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default App
