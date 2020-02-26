import axios from 'axios';
import { ngrokURL } from '../../../keys';

export default axios.create({
  baseURL: ngrokURL
});
