import { LOGIN, SIGNUP, OTP_VERIFY, SEND_OTP, INFINITR_SCROLL,SEARCH } from '../../config/urls';
import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, setItem, setUserData } from '../../utils/utils';


export function getUserSearch(data = {}) {
    return new Promise((resolve, reject) => {
      apiPost(INFINITR_SCROLL, data).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    }) 
  }

  export function searchUsers(data) {
      let urls=SEARCH+`?name=${data}`
    return  apiGet(urls);
  }
  
