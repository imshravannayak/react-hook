import { useState } from "react";
import { useReducer } from "react";
import "./App.css";
import Video from "./components/Video";
import videosData from "./data/data";
// import Playbutton from "./components/Playbutton";
import AddButton from "./components/AddButton";
import VideoList from "./components/VideoList";
import DispatchContext from "./DispatchContext";

function App() {
  //const [videos, setVideo] = useState(videosData);
  const [editablevideo, seteditablevideo] = useState(null);
  const [videos,dispatch]=useReducer(videoReducer,videosData)
  function videoReducer(videos,action){
switch (action.type){
  case 'LOAD':
    return [videos];
case 'ADD':
return [...videos, { ...action.video, id: videos.length + 1 }];
case 'DELETE':
  return videos.filter(video => video.id !==action.id);
  case 'UPDATE':
    const index= videos.findIndex(v=>v.id === action.video.id )
     let update=[...videos];
     
     update.splice(index,1,action.video)
     return update
    default:
      return 'empty';
}
  }

  function DeleteVideo(id){
    //setVideo(videos.filter(video => video.id !==id))
    dispatch({type:'DELETE',id:id})
  }
  function EditVideo(id){
    seteditablevideo(videos.find(video => video.id ==id))
   
  }

  return (
    <>
    <div className='App'>
      <DispatchContext.Provider value={dispatch}>
      <AddButton editvideodata={editablevideo} ></AddButton>
      <VideoList videos={videos}  EditVideo={EditVideo} ></VideoList>
      </DispatchContext.Provider>
      
    </div>
    </>
  );
}

export default App;
