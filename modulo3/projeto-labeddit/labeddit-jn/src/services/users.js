import axios from "axios";
import { baseURL } from "../constants/urls";
import { goToFeedReplace } from "../routes/coordinator";

export const postLogin = (body, navigate, setTextButton) => {
    const url = `${baseURL}users/login`
    axios.post(url, body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token);
      goToFeedReplace(navigate)
      setTextButton("logout");})
    .catch((err)=>{console.log(err.response.data)})
}

export const postSignUp = (body, navigate, setTextButton) => {
    const url = `${baseURL}users/signup`
    axios.post(url, body)
    .then((resp)=>{
      localStorage.setItem("token", resp.data.token);
      goToFeedReplace(navigate)
      setTextButton("logout");})
    .catch((err)=>{console.log(err.response.data)})
}