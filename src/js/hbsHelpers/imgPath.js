import { NODE_ENV, HOST, PUBLICPATH } from '../../../config';

export default function imgPath () {
  return NODE_ENV === 'production' ? `${HOST}${PUBLICPATH}/static/images` : 'static/images';
};