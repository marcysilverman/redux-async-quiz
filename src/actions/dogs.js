import { getImage } from '../services/dogApi';

export const FETCH_IMAGE = 'FETCH_IMAGE';

export const fetchImages = () => ({
  type: FETCH_IMAGE,
  payload: getImage()
});
