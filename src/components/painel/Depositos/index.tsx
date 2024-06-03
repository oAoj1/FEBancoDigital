import './Depositos.css'

import api from '../../../api/api'

import { useState,useEffect } from 'react'

import SomasGerais from '../Somas'

import { IoMdAdd } from "react-icons/io"
import AddDeposito from '../../formularios/addDeposito/addDeposito'

export default function Depositos(){

    const [depositos,setDepositos] = useState<any>([])

    const [isOpenForm,setIsOpenForm] = useState(false)

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
                <button onClick={() => setIsOpenForm(!isOpenForm)}>
                    <IoMdAdd/>
                </button>

                <div className="formDepositos">
                    {isOpenForm ? <AddDeposito/> : ''}
                </div>
                
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