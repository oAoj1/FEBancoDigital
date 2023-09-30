import '../estilos/Editar.css'
import api from '../../src/api/api.ts'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function EditarMetodos(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [metodos,setMetodos] = useState<any>([])

    useEffect(() => {
        async function lerMetodos(){
            const response = await api.get(`/metodo/${id}`)
            const data = response.data
    
            setMetodos(data)
        }

        lerMetodos()

    },[])

    const somas = Number(metodos.gastoFundamental) + Number(metodos.gastoPessoal) + Number(metodos.reservaInvestimento)
    async function editarMetodo(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        
        if(somas > 100 || somas < 100){
            alert('Todos valores precisam somar 100%')
        }else{
            await api.put(`/metodo/${id}`, metodos)
                .then(() => {
                    alert('Metodo atualizado!')
                    navigate('/')
                })
                .catch(err => {
                    alert('Erro ao atualizar metodo')
                    console.log(err)
                })
        }
        
    }

    return(
        <div className="editarMetodosContainer">
            <p className='limite'>{somas}% - 100%</p>
            <form onSubmit={editarMetodo} className='editarMetodoForm'>
                <label htmlFor="fundamental">Fundamental</label>
                <input 
                    type="text" 
                    value={metodos.gastoFundamental}
                    onChange={e => setMetodos({
                        ...metodos,
                        gastoFundamental:e.target.value
                    })}
                />
                <label htmlFor="pessoal">Pessoal</label>
                <input 
                    type="text" 
                    value={metodos.gastoPessoal}
                    onChange={e => setMetodos({
                        ...metodos,
                        gastoPessoal:e.target.value
                    })}
                />
                <label htmlFor="reservaInvestimento">Reserva investimento</label>
                <input 
                    type="text" 
                    value={metodos.reservaInvestimento}
                    onChange={e => setMetodos({
                        ...metodos,
                        reservaInvestimento:e.target.value
                    })}
                />

                <button>Editar</button>
            </form>
        </div>
    )
}