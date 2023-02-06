import styled from "styled-components";

export const Container = styled.section`
  section {
    display: flex;
    justify-content:center;
    flex-direction: column;
    width: 333px;
    height: 423px;
    margin-left: 10px;
    background-color: var(--grey-0);
    margin-top: 4px;
    z-index: -1;
  }


  h2 {
    padding-left: 10px;
    padding-top: 20px;
    height: 43px;
    border-radius: 5px 5px 0px 0px;
    background-color: var(--Color-primary);
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-0);
    margin-top: 0px;
  }

  h3 {
    text-align: center;
    color: var(--gray-100);
  }

  h4 {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: var( --grey-50);
  }
  

  @media(min-width:375px){
  section{
    width: 355px;
    margin-left:10px;
  }
}

@media(min-width:425px){
    section{
      width: 395px;

    }
    
  }

  @media(min-width:768px){
      section{
        width: 740px;
      }
    }

    @media(min-width:1024px){
      section{
        position:relative;
        width: 390px;
        margin-left: 955px;
        bottom:600px;
      }

    }

    .total-money{
      display:flex;
      align-items:center;
      padding:10px;
      justify-content: center;
      gap:130px;
    }

    div{
      background: var(--grey-20);
      margin-top:200px;
    }

    h3{
      position:relative;
      right:50px;
      color:var(--gray-100);
    }

    button{
      border: none;
      font-size:16px;
      margin-top:20px;
      background:var(--grey-0);
      color:var(--grey-50);
    }
  
`;
