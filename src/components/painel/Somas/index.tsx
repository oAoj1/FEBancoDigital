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
    
                setSomasGerais(data[0])
            }
    
            lerSomasGerais()

        }catch(error){
            console.log(error)
        }
    },[])

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