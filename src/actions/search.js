import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// import App from '../components/App.js';

var handleVideoSearch = (q) => {
 
  //TODO:  Write an asynchronous action to handle a video search!
  return(dispatch)=>{
    
    fetch('https://www.googleapis.com/youtube/v3/search')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(getYouTubeVideos(q));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(changeVideoList(items)))
      // .then((items[0]) => dispatch(changeVideo(items[0])))
      
  }
  
};

export default handleVideoSearch;
