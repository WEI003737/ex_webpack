import { NODE_ENV, HOST, PUBLIC_PATH, PGW_PATH } from '../../../config';

export default function imgPath (filename) {

  let imgPath;
  switch (NODE_ENV) {
    case 'production':
      imgPath = `${PGW_PATH}${HOST}${PUBLIC_PATH}/static/images/${filename}`;
      // imgPath = `https:${HOST}${PUBLIC_PATH}/static/images/${filename}`;
      break;
    case 'development':
    default:
      imgPath = `static/images/${filename}`;
  }

  return imgPath;

};