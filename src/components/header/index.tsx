import './Header.css'
import { GrMoney } from 'react-icons/gr'

export default function Cabecalho(){

    const menu = [
        'Home',
        'Gastos',
        'Depositos'
    ]

    function navegarMenu(componente:any){
        const scrollID = `${componente}Section`

        function scrollMenu(){
            document.getElementById(scrollID)?.scrollIntoView({behavior:'smooth'})
        }

        return(
            <ul key={componente} className='menuHeader'>
                <li>
                    <button onClick={scrollMenu}>
                        {componente}
                    </button>
                </li>
            </ul>
        )
    }

    return(
        <header>
            <div className="logoHeader">
                <h2>Controlar</h2>
                <GrMoney/>
                <h2>Finanças</h2>
            </div>
            <ul className='menuHeader'>
                {menu.map(opcoes => (
                    navegarMenu(opcoes)
                ))}
            </ul>
        </header>
    )
}