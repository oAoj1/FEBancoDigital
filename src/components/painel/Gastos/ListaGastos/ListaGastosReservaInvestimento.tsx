import './ListaGastos.css'

import api from "../../../../api/api"

import { useState,useEffect } from 'react'

import { FaAngleRight,FaCaretLeft } from "react-icons/fa6"

export default function ListaGastosReservaInvestimento(){

    const [isOpenSaibaMais,setIsOpenSaibaMais] = useState(false)
    const [idGasto,setIdGasto] = useState<any | string>('')
    const [gastos,setGastos] = useState<any>([])

    useEffect(() => {
        async function lerGastos(){
            const response = await api.get(`/gasto/filtrar?classificacao=reservaInvestimento`)
            const data = response.data

            setGastos(data)
        }

        lerGastos()
    },[])

    return(
        <ul className="listaGastos">
            {gastos.map((gastos:any | string) => (
                <li key={gastos._id}>
                    <h3>{gastos.nome}</h3>
                    <h4>
                        R$ {Number(gastos.valor).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        })}
                    </h4>

                    <button onClick={() => {
                        setIsOpenSaibaMais(!isOpenSaibaMais)
                        setIdGasto(gastos._id)
                    }}>
                        Saiba mais
                        <FaAngleRight/>
                    </button>
                    
                    <div style={{position:'absolute'}}>
                        {isOpenSaibaMais && gastos._id == idGasto ? 
                            <div className="saibaMais">
                                <FaCaretLeft/>

                                <h2>{gastos.nome}</h2>
                                <p> R$ {Number(gastos.valor).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                    })}
                                </p>
                                <span>{gastos.classificacao}</span>
                                <input 
                                    type='date' 
                                    value={gastos.data}
                                    disabled
                                />
                            </div>
                        : ''}
                    </div>
                    
                </li>
            ))}
        </ul>
    )
}