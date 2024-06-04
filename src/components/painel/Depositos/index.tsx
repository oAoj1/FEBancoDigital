import './Depositos.css'

import api from '../../../api/api'

import { useState,useEffect } from 'react'

import SomasGerais from '../Somas'

import { IoMdAdd } from "react-icons/io"

import { Link } from 'react-router-dom'

export default function Depositos(){

    const [depositos,setDepositos] = useState<any>([])

    useEffect(() => {
        async function lerDepositos(){
            const response = await api.get('/deposito')
            const data = response.data
            
            setDepositos(data)
        }
    
        lerDepositos()

    },[])

    return(
        <div className="depositos">
            <div className="tituloDepositos">
                <h2>Depositos</h2>
                <button>
                    <Link to='/adicionardeposito'>
                        <IoMdAdd/>
                    </Link>
                </button>
                
            </div>
            
            <SomasGerais
                props='depositosSomados'
            />

            <ul className='listaDepositos'>
                {depositos.map((depositos:any | string) => (
                    <li key={depositos._id}>
                        <h3>
                            R$ {Number(depositos.valor).toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                            })}
                        </h3>
                        <input 
                            type="date"
                            value={depositos.data} 
                            disabled
                        />
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}