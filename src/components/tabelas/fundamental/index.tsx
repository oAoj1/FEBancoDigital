import api from '../../../api/api.ts'
import {useEffect,useState} from 'react'

export default function TabelaFundamental(){

    const [gastos,setGastos] = useState<any>([])
    const [somasFundamental,setSomasFundamental] = useState<any>([])

    useEffect(() => {
        async function lerGastos(){
            const response = await api.get('/gasto/filtrar?classificacao=fundamental')
            const data = response.data

            setGastos(data)
        }

        async function lerSomasFundamental(){
            const response = await api.get('/somasgerais')
            const data = response.data

            setSomasFundamental(data)
        }

        lerGastos()
        lerSomasFundamental()

    },[])

    return(
        <div>
            {somasFundamental.map((somas:any | string) => (
                <p key={somas._id} className='somas'> 
                    Fundamental somado: R$ {somas.fundamentalSomado}
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

                {gastos.map((gastos: any | string) => (
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