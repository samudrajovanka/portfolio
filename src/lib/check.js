import { emailRegex } from '@constants/regex';

const isEmail = (str) => new RegExp(emailRegex).test(str);
const isObjEmpty = (obj) => obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;

export { isEmail, isObjEmpty };
