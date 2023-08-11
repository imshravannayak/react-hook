import { useState } from 'react';
import './Playbutton.css';
function Playbutton({onPlay,onPause}){
    
   let [status,setStatus]=useState(false)
    function handleClick(e){
        e.stopPropagation();
        if(status) onPause()
        else onPlay()
        setStatus(!status)
    }
    return(
        <>
        <button onClick={handleClick} className='button'  >{status ? 'pause':'play'}</button>
        </>
    ) 
}
export default Playbutton;