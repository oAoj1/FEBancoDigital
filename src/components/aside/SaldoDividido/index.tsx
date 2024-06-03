import './SaldoDividido.css'

import api from '../../../api/api'

import { useState,useEffect } from 'react'

import { FaChevronRight } from "react-icons/fa"

export default function SaldoDividido(){

    const [saldoDividido,setSaldoDividido] = useState<any>({})
    const [metodo,setMetodo] = useState<any>({})

    useEffect(() => {

        async function lerSaldoDividido(){
            const response = await api.get('/saldodividido')
            const data = response.data

            const saldoFundamental = Number(data[0].saldoFundamental).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })

            const saldoPessoal = Number(data[0].saldoPessoal).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })

            const saldoReserva = Number(data[0].saldoReservaInvestimento).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })

            setSaldoDividido({
                'Fundamental':saldoFundamental,
                'Pessoal':saldoPessoal,
                'Reserva':saldoReserva
            })
        }

        async function lerMetodo(){
            const response = await api.get('/metodo')
            const data = response.data

            setMetodo(data[0])
        }

        lerSaldoDividido()
        lerMetodo()

    },[])

    return(
        <div className="saldoDividido">
            <div className="tituloSaldoDividido">
                <h3>Saldo dividido</h3>
                <button>Editar <FaChevronRight/></button>
            </div>

            <div className="divisoes">
                <div className="fundamental">
                    <h3>Fundamental</h3>
                    <h2>
                        <b>{metodo.gastoFundamental}% </b>
                        <br/> 
                        <i>R$ {saldoDividido.Fundamental}</i>
                    </h2>
                </div>

                <div className="pessoal">
                    <h3>Pessoal</h3>
                    <h2>
                        <b>{metodo.gastoPessoal}% </b>
                        <br/> 
                        <i>R$ {saldoDividido.Pessoal}</i>
                    </h2>
                </div>

                <div className="reserva">
                    <h3>Reserva</h3>
                    <h2>
                        <b>{metodo.reservaInvestimento}%</b>
                        <br/>
                        <i>R$ {saldoDividido.Reserva}</i>
                    </h2>
                </div>

            </div>
            
        </div>
    )
}