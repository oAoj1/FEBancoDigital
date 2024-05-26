import '../estilos/Adicionar.css'
import api from '../api/api.ts'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'

export default function AdicionarDeposito(){

    const navigate = useNavigate()

    let data = new Date()
    let diaHoje = String(data.getDate()).padStart(2,'0')
    let mesHoje = String(data.getMonth() + 1).padStart(2,'0')
    let anoHoje = data.getFullYear()
    let dataCompleta = `${anoHoje}-${mesHoje}-${diaHoje}`

    const [novoDeposito,setNovoDeposito] = useState<any>({
        valor:"",
        data:dataCompleta,
    })

    async function adicionandoDeposito(event:FormEvent){
        event.preventDefault()

        await api.post('/deposito', novoDeposito)
            .then(() => {
                alert('Deposito criado com sucesso!')
                navigate('/')
            })  
            .catch(err => {
                alert('Erro ao criar deposito, confira console')
                console.log(err)
            })
    }


    return(
        <form onSubmit={adicionandoDeposito} className='adicionarForm'>
            <h2>Depositos</h2>

            <label>Data deposito</label>
            <input
                disabled
                type='date'
                value={dataCompleta}
            />

            <label>Valor deposito</label>
            <input
                required
                min='1'
                type='number'
                onChange={e => setNovoDeposito({
                    ...novoDeposito,
                    valor:e.target.value
                })}
                placeholder='Valor'
            />

            <button>Enviar</button> 

        </form>
    )
}