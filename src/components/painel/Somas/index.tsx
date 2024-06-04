import './Somas.css'

import api from '../../../api/api'

import { useState,useEffect } from 'react'

export default function SomasGerais({props}:any|string){

    const [somasGerais,setSomasGerais] = useState<any>({})

    useEffect(() => {
        try{
            async function lerSomasGerais(){
                const response = await api.get('/somasgerais')
                const data = response.data

                const gastosFormatados = Number(data[0].gastosSomados).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })

                const depositosFormatados = Number(data[0].depositosSomados).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })

                const fundamentalFormatados = Number(data[0].fundamentalSomado).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })

                const pessoalFormatados = Number(data[0].pessoalSomado).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })

                const reservaInvestimentoFormatados = Number(data[0].reservaInvestimentoSomado).toLocaleString('pt-BR', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })

                setSomasGerais({
                    gastosSomados:gastosFormatados,
                    depositosSomados:depositosFormatados,
                    fundamentalSomado:fundamentalFormatados,
                    pessoalSomado:pessoalFormatados,
                    reservaInvestimentoSomado:reservaInvestimentoFormatados
                })
            }
    
            lerSomasGerais()

        }catch(error){
            console.log(error)
        }
    },[])

    console.log(somasGerais)

    return(
        <div className="somasGerais">
            <p key={somasGerais._id}>
                R$ {
                    props == 'gastosSomados' ? somasGerais.gastosSomados :
                    props == 'depositosSomados' ? somasGerais.depositosSomados :
                    props == 'fundamentalSomado' ? somasGerais.fundamentalSomado :
                    props == 'pessoalSomado' ? somasGerais.pessoalSomado :
                    props == 'reservaInvestimentoSomado' ? somasGerais.reservaInvestimentoSomado : ''
                }
            </p>
        </div>
    )
}