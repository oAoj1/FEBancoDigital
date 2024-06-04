import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BannerEntrada from './paginas/BannerEntrada/BannerEntrada.tsx'
import PaginaPrincipal from './paginas/PaginalPrincipal/index.tsx'
import PaginaAddGastos from './paginas/AddGasto/index.tsx'
import PaginaAddDepositos from './paginas/AddDeposito/index.tsx'
import PaginaEditarPorcentagemMetodos from './paginas/EditPorcentagemMetodos/index.tsx'

export default function App(){
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<BannerEntrada/>}/>
          <Route path='/seubanco' element={<PaginaPrincipal/>}/>
          <Route path='/adicionargasto' element={<PaginaAddGastos/>}/>
          <Route path='/adicionardeposito' element={<PaginaAddDepositos/>}/>
          <Route path='/editarmetodo' element={<PaginaEditarPorcentagemMetodos/>}/>
        </Routes>
      </Router>
    </div>
  )
}