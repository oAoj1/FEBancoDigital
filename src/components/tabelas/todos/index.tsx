import '../Tabelas.css'
import api from '../../../api/api.ts'
import {useEffect,useState} from 'react'

export default function TodasTabelas(){

    const [gastos,setGastos] = useState<any>([])
    const [geralSomado,setGeralSomado] = useState<any>([])

    useEffect(() => {
        async function lerGastos(){
            const response = await api.get('/gasto')
            const data = response.data

            setGastos(data)
        }
        
        async function lerGeralSomado(){
            const response = await api.get('/somasgerais')
            const data = response.data

            setGeralSomado(data)
        }

        lerGastos()
        lerGeralSomado()

    },[])

    return(
        <div>
            {geralSomado.map(somas => (
                <p key={somas._id} className='somas'> 
                    Geral somado: R$ {somas.gastosSomados}
                </p>
            ))}

            <table className='gastosTable'>
                
                <tr>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Nome</th>
                    <th>Classificação</th>
                    <th>Tipo</th>
                </tr>

                {gastos.map(gastos => (
                    <tr key={gastos._id}>
                        <td><input type="date" value={gastos.data} disabled/></td>
                        <td>R$ {gastos.valor}</td>
                        <td>{gastos.nome}</td>
                        <td>{gastos.classificacao}</td>
                        <td>{gastos.tipo}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}