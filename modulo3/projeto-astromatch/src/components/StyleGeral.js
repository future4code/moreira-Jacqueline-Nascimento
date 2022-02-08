import styled, {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
`

// App.js
export const Container = styled.div`
    background-image: linear-gradient(to bottom left, #ff8941, #dd4587);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Card = styled.div`
    background-color: white;
    width: 350px;
    max-width: 100vw;
    height: 500px;
    border: 1px solid black;
    border-radius: 10px 20px;
`

//Home.js
export const Title = styled.div`
    display: flex;
    .pink{
        color: #dd4587;
    };
    .orange{
        color: #ff8941;
    }
`
export const TitleArea = styled.div`
    display: flex;
    justify-content: space-between;
`