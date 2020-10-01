import axios from 'axios';

const KEY = 'AIzaSyCGjzMwnIjCQH1urXGOuazx7Dpze3_Zsq4';

export default axios.create({
   baseURL:  'https://www.googleapis.com/youtube/v3',
   params:{
       part: 'snippet',
       maxResults: 10,
       key: KEY,
       type: 'video'
   }
});