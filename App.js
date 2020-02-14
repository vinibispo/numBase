import React, {useState, useEffect} from 'react'
import App from './src/App'
import Loading from './src/screen/Loading'
export default First = () =>{
    const [screen, setScreen] = useState('Splash')
    return(
        screen === 'Splash' ? <Loading/> : <App/> 
    )
}