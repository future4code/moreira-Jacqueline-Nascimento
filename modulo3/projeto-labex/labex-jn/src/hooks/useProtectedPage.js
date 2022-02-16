import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if (token === null){
          navigate('/login')
          console.log("não está logado")
        }
      },[navigate])
}
