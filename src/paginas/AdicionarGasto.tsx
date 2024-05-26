import '../estilos/Adicionar.css'
import api from './../api/api.ts'
import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'

export default function AdicionarGasto(){

    const navigate = useNavigate()

    const opcoesClassificacao = [
        '',
        'fundamental',
        'pessoal',
        'reservaInvestimento'
    ]

    const tiposFundamental = [
        '',
        'transporte',
        'conta',
        'alimentacao',
        'mercado',
        'outro'
    ]

    const tiposPessoal = [
        '',
        'fast-food',
        'beleza',
        'entreterimento',
        'outro'
    ]
    
    const tipoReservaInvestimento = [
        '',
        'reserva',
        'investimento',
        'outro'
    ]
    
    let data = new Date()
    let diaHoje = String(data.getDate()).padStart(2,'0')
    let mesHoje = String(data.getMonth() + 1).padStart(2,'0')
    let anoHoje = data.getFullYear()
    let dataCompleta = `${anoHoje}-${mesHoje}-${diaHoje}`

    const [novoGasto,setNovoGasto] = useState<any>({
        nome:"",
        valor:"",
        data:dataCompleta,
        tipo:"",
        classificacao:""
    })

    async function adicionandoGasto(event:FormEvent){
        event.preventDefault()

        await api.post('/gasto', novoGasto)
            .then(() => {
                alert('Gasto criado com sucesso!')
                navigate('/')
            })  
            .catch(err => {
                alert('Erro ao criar gasto, confira console')
                console.log(err)
            })
    }


    return(
        <form onSubmit={adicionandoGasto} className='adicionarForm'>
            <h2>Gastos</h2>

            <label>Data gasto</label>
            <input
                disabled
                type='date'
                value={dataCompleta}
                />

            <label>Nome gasto</label>
            <input
                required
                type='text'
                onChange={e => setNovoGasto({
                    ...novoGasto,
                    nome:e.target.value
                })}
                placeholder='Nome'
            />

            <label>Valor gasto</label>
            <input
                required
                min='1'
                type='number'
                placeholder='Valor'
                onChange={e => setNovoGasto({
                    ...novoGasto,
                    valor:e.target.value
                })}
            />

            <label>Classificação gasto</label>
            <select
                required
                onChange={e => setNovoGasto({
                    ...novoGasto,
                    classificacao:e.target.value
                })}
            >
                {opcoesClassificacao.map((opcoes) => (
                    <option>{opcoes}</option>
                ))}
            </select>
            
            {novoGasto.classificacao == 'fundamental' ? 
                <div>
                    <label>Tipo gasto</label> <br/>
                    <select 
                        required
                        onChange={e => setNovoGasto({
                            ...novoGasto,
                            tipo:e.target.value
                        })}
                    >
                        {tiposFundamental.map((fundamental) => (
                            <option>{fundamental}</option>
                        ))}
                    </select> 
                </div> :

                novoGasto.classificacao == 'pessoal' ?
                
                <div>
                    <label>Tipo gasto</label> <br/>
                    <select 
                        required
                        onChange={e => setNovoGasto({
                            ...novoGasto,
                            tipo:e.target.value
                        })}
                    >
                        {tiposPessoal.map((pessoal) => (
                            <option>{pessoal}</option>
                        ))}
                    </select> 
                </div> : 

                novoGasto.classificacao == 'reservaInvestimento' ? 
                
                <div>
                    <label>Tipo gasto</label> <br/>
                    <select 
                        required
                        onChange={e => setNovoGasto({
                            ...novoGasto,
                            tipo:e.target.value
                        })}
                    >
                        {tipoReservaInvestimento.map((reservaInvestimento) => (
                            <option>{reservaInvestimento}</option>
                        ))}
                    </select> 
                </div> : ''
            }

            <button>Enviar</button> 

        </form>
    )
}