import { useEffect, useState } from 'react';
import './Addbutton.css';
import { useContext } from 'react';
import DispatchContext from '../DispatchContext';
import { useRef } from 'react';
const initialState={
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: '',
    views: ''
};
function AddButton({addvideo,editvideodata,updateVideo}){
    const titleRef=useRef();
   const dispatch=useContext(DispatchContext);
const [video,setVideo]=useState( initialState);
function handelSubmit(e){
    if(editvideodata) dispatch({type:'UPDATE', video:video})
    else  dispatch({type:'ADD',video:video})
e.preventDefault();
};
function handelOnchange(e){
    
    setVideo({...video,[e.target.name]:e.target.value})
  
    };
useEffect(()=>{
    titleRef.current.focus()
    console.log(editvideodata)
    if(editvideodata)setVideo(editvideodata)

},[editvideodata])
    return (
        <>
        <div className='form-add'>
        <form>
            <input type="text" onChange={handelOnchange} ref={titleRef} placeholder="Enter title" name ='title' value={video.title || ''}></input>
            <input type="text" onChange={handelOnchange} placeholder="Enter Views" name='views' value={video.views || ''}></input>
            <button onClick={handelSubmit}>{editvideodata?'update':'Submit'}</button>
        </form>
        </div>
        </>
    )
}
export default AddButton;