import './Section.css'

import api from '../../api/api.ts'

import TodasTabelas from '../tabelas/todos'
import TabelaPessoal from '../tabelas/pessoal'
import TabelaFundamental from '../tabelas/fundamental'
import TabelaReservaInvestimento from '../tabelas/reservaInvestimento'

import BotaoGastar from '../buttons/BotaoGastar.tsx'
import BotaoDepositar from '../buttons/BotaoDepositar.tsx'

import { useState, useEffect } from 'react'

export default function Secao(){

    const filtrar = [
        '',
        'todos',
        'fundamental',
        'pessoal',
        'reservaInvestimento'
    ]

    const [somas,setSomas] = useState<any>([])
    const [depositos,setDepositos] = useState<any>([])
    const [filtroGasto,setFiltroGasto] = useState<string>('')

    useEffect(() => {
        async function lerSomasGerais(){
            const response = await api.get('/somasgerais')
            const data = response.data

            setSomas(data)
        }

        async function lerDepositos(){
            const response = await api.get('/deposito')
            const data = response.data

            setDepositos(data)
        }

        lerDepositos()
        lerSomasGerais()

    },[])   
    
    return(
        <section>
            <div className="tituloSection">
                <h1>Tabelas</h1>
                <h2>Veja todas as tabelas de seus gastos e depositos</h2>
            </div>

            <hr/>

            <div className="gastosContainer" id='GastosSection'>
                <div>
                    <span>
                        <h3>Gastos</h3>
                        <select onChange={e => setFiltroGasto(e.target.value)}>
                            {filtrar.map(filtros => (
                                <option>{filtros}</option>
                            ))}
                        </select>
                    </span>
                    <span>
                        {filtroGasto == '' || filtroGasto == 'todos' ? 
                        <TodasTabelas/> : filtroGasto == 'fundamental' ?
                        <TabelaFundamental/> : filtroGasto == 'pessoal'? 
                        <TabelaPessoal/> :  filtroGasto == 'reservaInvestimento' ? 
                        <TabelaReservaInvestimento/> : ''}
                    </span>
                </div>


                <div className="botoesBanner">
                    <BotaoGastar/>
                </div>

            </div>
            
            <div className="depositosContainer" id='DepositosSection'>
                <div>
                    <h3>Depositos</h3>

                    <ul className='depositosSomados'>
                        {somas.map((depositos: any | string) => (
                            <li>Depositos somados: R$ {depositos.depositosSomados}</li>
                        ))}
                    </ul>

                    <table className='depositosTable'>
                        <tr>
                            <th>Data</th>
                            <th>Valor</th>
                        </tr>

                        {depositos.map((depositos: any | string) => (
                            <tr>
                                <td><input type="date" value={depositos.data} disabled/></td>
                                <td>R$ {depositos.valor}</td>
                            </tr>
                        ))}
                    </table>
                </div>

                <div className="botoesBanner">
                    <BotaoDepositar/>
                </div>

            </div>

        </section>
    )
}