import axios from "axios";

export const integrationGet = (url, setData, setIsLoading, setError) =>{
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.response);
      })
}