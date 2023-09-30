import './Buttons.css'
import { Link } from 'react-router-dom'
import { GiTakeMyMoney } from 'react-icons/gi'

export default function BotaoGastar(){
    return(
        <Link to='/addgasto'>
            <button title='Gastar' style={{
                background:'linear-gradient(35deg, #ff0000, #000)'
            }}>
                <GiTakeMyMoney/>
                <h3>Gastar</h3>
            </button>
        </Link>
    )
}