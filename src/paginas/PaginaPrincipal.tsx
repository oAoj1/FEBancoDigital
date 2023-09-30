import Banner from '../components/banner'
import Cabecalho from '../components/header'
import Secao from '../components/section'

export default function PaginaPrincipal(){
    return(
        <div>
            <Cabecalho/>
            <Banner/>
            <Secao/>
        </div>
    )
}