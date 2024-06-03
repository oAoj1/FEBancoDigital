import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BannerEntrada from './paginas/BannerEntrada/BannerEntrada.tsx'
import PaginaPrincipal from './paginas/PaginalPrincipal/index.tsx'

export default function App(){
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<BannerEntrada/>}/>
          <Route path='/seubanco' element={<PaginaPrincipal/>}/>
        </Routes>
      </Router>
    </div>
  )
}