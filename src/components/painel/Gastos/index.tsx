import './Gastos.css'

import { useState } from 'react'

import SomasGerais from '../Somas'

import ListaGastosTodos from './ListaGastos/ListaGastosTodos'
import ListaGastosFundamental from './ListaGastos/ListaGastosFundamental'
import ListaGastosPessoal from './ListaGastos/ListaGastosPessoal'
import ListaGastosReservaInvestimento from './ListaGastos/ListaGastosReservaInvestimento'

import { IoMdAdd } from "react-icons/io"

import { Link } from 'react-router-dom'

export default function Gastos(){

    const [classificacaoGasto,setClassificacaoGastos] = useState('')

    const listaClassificacoes = [
        '',
        'Todos',
        'Fundamental',
        'Pessoal',
        'Reserva/Investimento',
    ]

    return(
        <div className="gastos">
            <div className="tituloGastos">
                <h2>Gastos</h2>
                <button>
                    <Link to='/adicionargasto'>
                        <IoMdAdd/>
                    </Link>
                </button>

            </div>

            <select onChange={e => setClassificacaoGastos(e.target.value)}>
                {listaClassificacoes.map(classificacao => (
                    <option key={classificacao}>
                        {classificacao}
                    </option>
                ))}
            </select>

            

            <SomasGerais
                props={
                    classificacaoGasto == 'Todos' ? 'gastosSomados' : 
                    classificacaoGasto == 'Fundamental' ? 'fundamentalSomado' : 
                    classificacaoGasto == 'Pessoal' ? 'pessoalSomado' : 
                    classificacaoGasto == 'Reserva/Investimento' ? 'reservaInvestimentoSomado' : 
                    classificacaoGasto == '' ? 'gastosSomados' : ''
                }
            />

            {classificacaoGasto == 'Fundamental' ? 
                <ListaGastosFundamental/>
            : classificacaoGasto == 'Pessoal' ? 
                <ListaGastosPessoal/>
            : classificacaoGasto == 'Reserva/Investimento' ?
                <ListaGastosReservaInvestimento/>    
            : classificacaoGasto == 'Todos' ?
                <ListaGastosTodos/> 
            : classificacaoGasto == '' ?
                <ListaGastosTodos/> 
            : ''
            }

        </div>
    )
}