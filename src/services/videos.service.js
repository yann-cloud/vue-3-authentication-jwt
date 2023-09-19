import axios from 'axios';
//import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/';

class VideoService {

//return an array of video mockup data that will be used to populate the list of videos 
  getAll() {
    // const myInit = {
	// 	method: 'HEAD',
	// 	mode: 'no-cors',
	// };
    return axios(API_URL + 'videos', {mode: 'no-cors'})
    .then(response =>{
        console.log("datas", response.data)
        localStorage.setItem('videos', JSON.stringify(response.data));
    });
  }

  //returns metadata for a single video used by the player component
  getOneVideoWithMetadata() {
    return axios.get(API_URL + 'video/:id/data');
  }


  // Returns a video with a given id used by the player  component
  getOneVideo() {
    return axios.get(API_URL + 'video/:id');
  }

}

export default new VideoService();
