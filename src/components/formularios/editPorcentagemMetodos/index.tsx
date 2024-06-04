import './editPorcentagemMetodo.css'

import api from '../../../api/api'

import { FormEvent, useState, useEffect } from 'react'

import { FaArrowLeft } from "react-icons/fa6"

import { Link } from 'react-router-dom'

export default function EditPorcentagem(){

    const [metodo,setMetodos] = useState<any>({
        gastoFundamental:0,
        gastoPessoal:0,
        reservaInvestimento:0,
    })

    var porcentagensSomadas = Number(metodo.gastoFundamental) + Number(metodo.gastoPessoal) + Number(metodo.reservaInvestimento)

    useEffect(() => {
        try{
            async function lerMetodos(){
                const response = await api.get('/metodo')
                const data = response.data
    
                setMetodos(data[0])
            }
    
            lerMetodos()

        }catch(error){
            console.log(error)
        }

    },[])

    async function atualizarPorcentagemMetodos(event:FormEvent){
        event.preventDefault()

        if(porcentagensSomadas < 100 || porcentagensSomadas > 100){
            alert('Porcentagens somadas tem que ser igual 100%')
        }else{
            await api.put(`/metodo/64b3feaf25bbc8ee76e96211`,metodo)
            alert('Porcentagens atualizadas com sucesso!')
        }
    }

    return( 
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <Link to='/seubanco' className='voltar'>
                <FaArrowLeft/>
                <p>Voltar</p>
            </Link>

            <form 
                className='formEditPorcentagemMetodo'
                onSubmit={atualizarPorcentagemMetodos}
            >
                {porcentagensSomadas > 100 ? 
                    <h1 style={{color:'red'}}>
                        {porcentagensSomadas}%
                    </h1>
                :porcentagensSomadas < 100 ?
                    <h1 style={{color:'red'}}>
                        {porcentagensSomadas}%
                    </h1> 
                :
                    <h1 className='porcentagemIgualCem'>
                        {porcentagensSomadas}%
                    </h1>
                } 

                <input 
                    type="text"
                    value={metodo.gastoFundamental} 
                    onChange={(e) => setMetodos({ ...metodo, gastoFundamental: e.target.value })}
                />

                <input 
                    type="text"
                    value={metodo.gastoPessoal} 
                    onChange={(e) => setMetodos({ ...metodo, gastoPessoal: e.target.value })}
                />

                <input 
                    type="text"
                    value={metodo.reservaInvestimento} 
                    onChange={(e) => setMetodos({ ...metodo, reservaInvestimento: e.target.value })}
                />

                <button>Editar</button>

            </form>
        </div>
    )
}