import { LOGIN, SIGNUP, OTP_VERIFY, SEND_OTP, INFINITR_SCROLL,SEARCH, USER_CHATS, GET_USER_CHATS } from '../../config/urls';
import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, setItem, setUserData } from '../../utils/utils';
import store from '../store';
import types from '../types';

const {dispatch}=store;

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

  export function chatUser(data){
    dispatch({
      type: types.CHATS,
      payload: data
    })
  }
  

  export function getChatsUserData() {
    let urls=`${USER_CHATS}`+`?limit= ${6} &skip=${0}`


    return  apiGet(urls);
  }

  export const getUserChats=(commonConversationId)=>{
    let url=`${GET_USER_CHATS}`+`?commonConversationId=${commonConversationId}`
    return apiGet(url)
  }