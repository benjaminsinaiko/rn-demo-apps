import axios from 'axios';
import { yelpAPIKey } from '../../keys';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${yelpAPIKey}`
  }
});
