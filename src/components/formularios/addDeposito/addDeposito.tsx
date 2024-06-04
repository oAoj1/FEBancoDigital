import './addDeposito.css'

import api from '../../../api/api'

import { useState,FormEvent } from 'react'

import { FaArrowLeft } from "react-icons/fa6"

import { Link } from 'react-router-dom'

export default function AddDeposito(){

    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()

    let diaHoje = `${ano}-${mes}-${dia}`

    const [novoDeposito,setNovoDeposito] = useState({
        valor:'',
        data: diaHoje
    })

    async function adicionarDeposito(event:FormEvent){
        event.preventDefault()

            try{
                await api.post('/deposito',novoDeposito)
                alert('Deposito adicionado com sucesso!')
            }
            catch(error){
                alert('Erro ao adicionar deposito')
                console.log(error)
            }
    }

    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Link to='/seubanco' className='voltar'>
                <FaArrowLeft/>
                <p>Voltar</p>
            </Link>

            <form 
                onSubmit={adicionarDeposito}
                className='formAddDeposito'
            >
                <h1>Deposito</h1>
                <input 
                    onChange={e => setNovoDeposito({
                        ...novoDeposito,valor:e.target.value
                    })}
                    type="number" 
                    placeholder='Valor(R$)'
                    required
                />

                <input 
                    type="date" 
                    value={diaHoje}
                    disabled
                />

                <button>Adicionar</button>
            </form>
        </div>
    )
}