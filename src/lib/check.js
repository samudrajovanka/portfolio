import { emailRegex } from '@constants/regex';

const isEmail = (str) => new RegExp(emailRegex).test(str);
const isObjEmpty = (obj) => obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype;
const isArrayEqual = (arr1, arr2) =>
  Array.isArray(arr1) &&
  Array.isArray(arr2) &&
  arr1.length === arr2.length &&
  arr1.every((item, index) => item === arr2[index]);

export { isEmail, isObjEmpty, isArrayEqual };
