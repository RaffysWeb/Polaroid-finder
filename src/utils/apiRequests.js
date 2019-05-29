import axios from 'axios';

const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl =
  'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=';

const fetchImages = async searchInput => {
  try {
    const {
      data: { items }
    } = await axios.get(corsUrl + apiUrl + searchInput);
    return items;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchImages };
