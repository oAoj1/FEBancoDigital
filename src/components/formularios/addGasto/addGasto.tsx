import './addGasto.css'

import api from '../../../api/api'

import { FormEvent, useState } from 'react'

import { FaArrowLeft } from "react-icons/fa6"

import { Link } from 'react-router-dom'

export default function AddGasto(){

    const classificacoes = [
        '',
        'fundamental',
        'pessoal',
        'reservaInvestimento'
    ]

    const data = new Date()

    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()

    let diaHoje = `${ano}-${mes}-${dia}`

    const [novoGasto,setNovoGasto] = useState({
        nome:'',
        valor:'',
        classificacao:'',
        data: diaHoje
    })

    async function adicionarGasto(event:FormEvent){
        event.preventDefault()

            try{
                alert('Gasto adicionado com sucesso!')
                await api.post('/gasto',novoGasto)
            }
            catch(error){
                alert('Erro ao adicionar gasto')
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
                onSubmit={adicionarGasto}
                className='formAddGasto'
            >
                <h1>Gasto</h1>
                <input 
                    onChange={e => setNovoGasto({
                        ...novoGasto,nome:e.target.value
                    })}
                    type="text" 
                    placeholder='Nome'
                    required
                />

                <input 
                    onChange={e => setNovoGasto({
                        ...novoGasto,valor:e.target.value
                    })}
                    type="number" 
                    placeholder='Valor(R$)'
                    required
                />

                <select
                    required
                    onChange={e => setNovoGasto({
                        ...novoGasto,classificacao:e.target.value
                    })}
                >
                    {classificacoes.map(classificacoes => (
                        <option key={classificacoes}>
                            {classificacoes}
                        </option>
                    ))}
                </select>

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