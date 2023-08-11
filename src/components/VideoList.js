import Video from "./Video";
import Playbutton from "./Playbutton";
import "./VideoList.css";
function VideoList({videos,dispatch,EditVideo}){
return(
    <div className="video-container">
    {videos.map((video) => (
        <Video
          title={video.title}
          channel={video.channel}
          views={video.views}
          time={video.time}
          key={video.id}
          id={video.id}
          verified={video.verified}
          editvideo ={EditVideo}
        >
            <Playbutton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </Playbutton>
        </Video>
        
      ))}
     </div>
);
}
export default VideoList;