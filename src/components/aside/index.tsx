import './Aside.css'

import User from './User'
import SaldoDividido from './SaldoDividido'

export default function Aside(){

    return(
        <div className='aside'>
            <User/>

            <SaldoDividido/>
        </div>
    )
}