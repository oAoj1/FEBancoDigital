import './User.css'

import api from '../../../api/api'

import { useState,useEffect } from 'react'

import { FiUser } from "react-icons/fi"
import { IoMdSettings } from "react-icons/io"

export default function User(){

    const [saldo,setSaldo] = useState('')

    useEffect(() => {
        async function lerSaldo(){
            const response = await api.get('/saldo')
            const data = response.data

            const saldoFormatado = Number(data[0].saldo).toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })

            setSaldo(saldoFormatado)
        }

        lerSaldo()

    },[])

    return(
        <div className="user">
            <div className="tituloUser">
                <div className='mensagemUsuario'>
                    <FiUser/>
                    <h2>Olá, user</h2>
                </div>
                <div className='configuracao'>
                    <IoMdSettings/>
                </div>
            </div>
            <div className="saldoUser">
                <span>Saldo total</span>
                <h2>R$ {saldo}</h2> 
            </div>
        </div>
    )
}