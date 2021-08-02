const DEV_ENV = process.env.DEV_ENV;
const PROD_ENV = process.env.PROD_ENV;
const NODE_ENV = process.env.NODE_ENV;

const HOST = '//lab-event.udn.com'; //domain
const PUBLIC_PATH = '/act2021_dodo/webpack_test';
const PGW_PATH = 'https://pgw.udn.com.tw/gw/photo.php?u=https:';
const PORT = 8080;

export {
  DEV_ENV,
  PROD_ENV,
  NODE_ENV,
  HOST,
  PUBLIC_PATH,
  PGW_PATH,
  PORT
};