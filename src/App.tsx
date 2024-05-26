import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaginaPrincipal from './paginas/PaginaPrincipal.tsx'
import AdicionarGasto from './paginas/AdicionarGasto.tsx'
import AdicionarDeposito from './paginas/AdicionarDeposito.tsx'
import EditarMetodos from './paginas/EditarMetodos.tsx'

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