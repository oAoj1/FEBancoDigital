import './Painel.css'

import Depositos from './Depositos'
import Gastos from './Gastos'

export default function Painel(){
    return(
        <section>
            <h1>Painel</h1>

            <div className="gastosDepositosContainer">
                <Gastos/>

                <hr style={{width:'99%',margin:'auto'}}/>

                <Depositos/>
            </div>

        </section>
    )
}