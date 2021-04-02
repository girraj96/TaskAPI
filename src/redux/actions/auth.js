import { LOGIN, SIGNUP, OTP_VERIFY, SEND_OTP, INFINITR_SCROLL } from '../../config/urls';
import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, setItem, setUserData } from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch}=store;
export function onSendOTP(data = {}) {
    return new Promise((resolve, reject) => {
      apiPost(SEND_OTP, data).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    })
  }

  export function otpVerify(data = {}) {
    return new Promise((resolve, reject) => {
      apiPost(OTP_VERIFY, data).then(res => {
        setUserData(res.data).then(suc => {
          dispatch({
            type: types.LOGIN,
            payload: res.data
          })
          
        })
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    })
  }