import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './Paginas/PaginaPrincipal.tsx'
import AdicionarGasto from './Paginas/AdicionarGasto.tsx'
import AdicionarDeposito from './Paginas/AdicionarDeposito.tsx'
import EditarMetodos from './Paginas/EditarMetodos.tsx'

export default function App(){
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<PaginaPrincipal/>}/>
          <Route path='/addgasto' element={<AdicionarGasto/>}/>
          <Route path='/adddeposito' element={<AdicionarDeposito/>}/>
          <Route path='/editmethods/:id' element={<EditarMetodos/>}/>
        </Routes>
      </Router>
    </div>
  )
}