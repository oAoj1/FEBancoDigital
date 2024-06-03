import './PaginaPrincipal.css'

import Aside from '../../components/aside'
import Painel from '../../components/painel'

export default function PaginaPrincipal(){
    return(
        <div className='paginaPrincipalContainer'>
            <Aside/>
            <Painel/>
        </div>
    )
}