import axios from "axios";
import { baseURL } from "../constants/urls";

export const createPost = (body) => {
    const url = `${baseURL}posts`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.post(url, body, {headers})
    .then((resp)=>{
      console.log(resp.data)})
    .catch((err)=>{console.log(err.response)})
}

export const createComment = (body, id) => {
    const url = `${baseURL}posts/${id}/comments`
    const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
    axios.post(url, body, {headers})
    .then((resp)=>{
      console.log(resp.data)})
    .catch((err)=>{console.log(err.response)})
}

export const createPostVote = (body, id) => {
  const url = `${baseURL}posts/${id}/votes`
  const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };
  axios.post(url, body, {headers})
  .then((resp)=>{
    console.log(resp.data)})
  .catch((err)=>{console.log(err.response)})
}

export const changePostVote = (body, id) => {
  const url = `${baseURL}posts/${id}/votes`
  const headers = {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    };
  axios.put(url, body, {headers})
  .then((resp)=>{
    console.log(resp.data)})
  .catch((err)=>{console.log(err.response)})
}

export const deletePostVote = (id) => {
  const url = `${baseURL}posts/${id}/votes`
  const headers = {
      Authorization: localStorage.getItem("token"),
    };
  axios.delete(url, {headers})
  .then((resp)=>{
    console.log(resp.data)})
  .catch((err)=>{console.log(err.response)})
}