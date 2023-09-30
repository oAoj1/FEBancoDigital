import './Buttons.css'
import { Link } from 'react-router-dom'
import { RiLuggageDepositFill } from 'react-icons/ri'

export default function Depositar(){
    return(
        <Link to='/adddeposito'>
            <button title='Depositar' style={{
                background:'linear-gradient(35deg, #00ffff, #000)'
            }}>
                <RiLuggageDepositFill/>
                <h3>Depositar</h3>
            </button>
        </Link>
    )
}