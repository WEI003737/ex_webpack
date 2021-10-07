import { NODE_ENV, HOST, PUBLIC_PATH } from '../../../config';

export default function imgPath (filename) {
  return NODE_ENV === 'production'
        ? `https://pgw.udn.com.tw/gw/photo.php?u=https:${HOST}${PUBLIC_PATH}/static/images${filename}`
        : `static/images/${filename}`;
};