import './BannerEntrada.css'

import { useState } from 'react';

import { Link } from 'react-router-dom';

import { FaPiggyBank } from "react-icons/fa"

import { MdArrowRight } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";

import { FaCheck } from "react-icons/fa6"

export default function BannerEntrada(){

    const [arrow,setArrow] = useState(false)

    const vantagens = [
        {
            titulo:'Segurança',
            descricao:'Suas finanças estão seguras conosco'
        },
        {
            titulo:'Facilidade',
            descricao:'Não se enrole na hora de mexer nas suas finanças'
        },
        {
            titulo:'Liberdade',
            descricao:'Tenha total liberdade para mexer nas suas finanças '
        },
    ]

    return(
        <main className="BannerEntrada">

            <div className="tituloPrincipal">
                <h1>
                    Banco<FaPiggyBank/>Digital
                </h1>
            </div>

            <div className="banner">

                <div className="tituloBannerEntrada">
                    <h2>Banco digital</h2>
                    <div className="listaVantagens">
                        {vantagens.map(descricao => (
                            <li key={descricao.titulo}>
                                <div className="tituloDescricao">
                                    <FaCheck/>
                                    <h3>{descricao.titulo}</h3>
                                </div>
                                <div className="textoDescricao">
                                    <p>{descricao.descricao}</p>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>

                <div className="circle"></div>

                <div className="botaoBannerEntrada">
                    <Link to='/seubanco'>
                        <button 
                            onMouseEnter={() => setArrow(true)}
                            onMouseLeave={() => setArrow(false)}
                        >
                            Suas finanças
                            {arrow ? <MdArrowRightAlt/> : <MdArrowRight/>}
                        </button>
                    </Link>
                </div>
            </div>

        </main>
    )
}