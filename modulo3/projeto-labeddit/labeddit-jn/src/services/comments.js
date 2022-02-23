import axios from "axios";
import { baseURL } from "../constants/urls";

export const createCommentVote = (body, id) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.post(url, body, {headers})
    .then((resp)=>{
      console.log(resp.data)})
    .catch((err)=>{console.log(err.response)})
  }
  
  export const changeCommentVote = (body, id) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.put(url, body, {headers})
    .then((resp)=>{
      console.log(resp.data)})
    .catch((err)=>{console.log(err.response)})
  }
  
  export const deleteCommentVote = (id) => {
    const url = `${baseURL}comments/${id}/votes`
    const headers = {
        Authorization: localStorage.getItem("token"),
      };
    axios.delete(url, {headers})
    .then((resp)=>{
      console.log(resp.data)})
    .catch((err)=>{console.log(err.response)})
  }