import { NODE_ENV, HOST, PUBLIC_PATH } from '../../../config';

export default function urlPath (filename) {

  let urlPath;
  switch (NODE_ENV) {
    case 'production':
      urlPath = `https:${HOST}${PUBLIC_PATH}/${filename}`;
      break;
    case 'development':
    default:
      urlPath = `../${filename}`;
  }

  return urlPath;

}
