import './Banner.css'
import api from '../../api/api.ts'

import BotaoDepositar from '../buttons/BotaoDepositar.tsx'
import BotaoGastar from '../buttons/BotaoGastar.tsx'

import { Link } from 'react-router-dom'
import { GiMoneyStack } from 'react-icons/gi'
import { useState } from 'react'

export default function Banner(){
    
    const [saldo,setSaldo] = useState<any>([])
    const [metodos,setMetodos] = useState<any>([])
    const [saldoDividido,setSaldoDividido] = useState<any>([])

    try{
        async function lerSaldo(){
            const response = await api.get('/saldo')
            const data = response.data

            setSaldo(data)
        }

        async function lerMetodos(){
            const response = await api.get('/metodo')
            const data = response.data

            setMetodos(data)
        }

        async function lerSaldoDividido(){
            const response = await api.get('/saldodividido')
            const data = response.data

            setSaldoDividido(data)
        }

        lerSaldo()
        lerMetodos()
        lerSaldoDividido()
    }catch(error){
        console.log(error)
    }

    

    return(
        <main id='HomeSection'>
            <div className="tituloBanner">
                <h1> 
                    <p>Controlar</p>
                    <p>Finanças</p>  
                </h1>
                <h2>Tenha total controle de como você gasta seu dinheiro</h2>

                <div className="botoesBanner">
                    <BotaoGastar/>
                    <BotaoDepositar/>
                </div>

            </div>

            <div className="saldoBanner">

                <ul className='saldoList'>
                    <div className="logoBanner">
                        <GiMoneyStack/>
                    </div>
                    {saldo.map((saldo: any | string) => (
                        <li key={saldo._id}>
                            <h3>R$ {saldo.saldo}</h3>
                        </li>
                    ))}
                </ul>

                <div className="metodosBanner">
                    <ul className='metodoList'>
                        {metodos.map((metodo:any) => (
                            <li key={metodo._id}>
                                <p>
                                    <h4 style={{color:'#7df20f'}}>Fundamental</h4>
                                    <span>{metodo.gastoFundamental}%</span>
                                    <ul className="saldoDivididoList">
                                        {saldoDividido.map((dividido:any | string) => (
                                            <li key={dividido._id}>
                                                <h5>R$ {dividido.saldoFundamental}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                                <p>
                                    <h4 style={{color:'#ffd700'}}>Pessoal</h4>
                                    <span>{metodo.gastoPessoal}%</span>
                                    <ul className="saldoDivididoList">
                                        {saldoDividido.map((dividido:any | string) => (
                                            <li key={dividido._id}>
                                                <h5>R$ {dividido.saldoPessoal}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                                <p>
                                    <h4 style={{color:'#00ffff'}}>Reserva/ <br/>Investimento</h4>
                                    <span>{metodo.reservaInvestimento}%</span>
                                    <ul className="saldoDivididoList">
                                        {saldoDividido.map((dividido:any | string) => (
                                            <li key={dividido._id}>
                                                <h5>R$ {dividido.saldoReservaInvestimento}</h5>
                                            </li>
                                        ))}
                                    </ul>
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="editarMetodo">
                        {metodos.map((metodos: any | string) => (
                            <Link to={`/editmethods/${metodos._id}`}>
                                <button className='botaoEditarMetodo'>
                                    Editar
                                </button>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>

        </main>
    )
}