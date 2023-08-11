import './Video.css'
import Playbutton from './Playbutton'
import DispatchContext from '../DispatchContext';
import { useContext } from 'react';
function Video({title,channel,views,time,verified,setPlay,id,deletevideo,editvideo,children}){
    const dispatch=useContext(DispatchContext);
    return(
        <>
        <div className='container dark'>
            <div className='pic'>
            <img src="https://placebeard.it/160/100" alt="thumbnail"/>
            </div>
            <div className="title">{title}</div>
            <div className="channel">{channel}{verified && '✅'}</div>
            <div className="views">
                {views} views <span>.</span> {time}
            </div>
             <button className='close' onClick={()=>dispatch({type:'DELETE',id:id})}>close</button>
             <button className='edit' onClick={()=>editvideo(id)}>edit</button>
             <div>{children}</div>
        </div>
        </>
    )
}


export default Video;