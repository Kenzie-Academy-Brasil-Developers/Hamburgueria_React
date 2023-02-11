import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  :root{

    /* COLORS */

    /* Primary Palette*/
    --Color-primary:#27AE60;
    --Color-primary-50:#93D7AF;
    --Color-secondary:#EB5757;

    /* Grey Scale Palette */
    --gray-100:#333333;
    --grey-50:#828282;
    --grey-20:#E0E0E0;
    --grey-0:#F5F5F5;

    /* Feedback Palette */
    --Negative:#E60000;
    --Warning:#FFCD07;
    --Sucess:#168821;
    --Information:#155BCB


  }

  *{
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    text-decoration: none;
    list-style: none;
    font-family: 'Inter', sans-serif;

    button{
      cursor: pointer;
    }
  }



  p{
    font-size:30PX;
    text-align:center;
    margin-top:200px;
    font-weight:700;
  }
  
  ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width:881px;
  }

  .but-clean{
    color:var(--grey-50);
    bottom:60px;
    border: none;
    background: none;
    font-size:21px;
    margin-left: 230px;
    margin-top:20px;
  }

@media(max-width:1024px){
  ul{
    max-width: 821px;
  }
}

@media(max-width:768px){
  ul {
      overflow-y: auto;
      max-width: 405px;
      display: flex;
      flex-wrap: nowrap;
  }
}

@media(max-width:425px){
  ul{
    margin-top: 43px;
  }
}

`;
