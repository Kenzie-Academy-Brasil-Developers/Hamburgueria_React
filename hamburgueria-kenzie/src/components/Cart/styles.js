import styled from "styled-components";

export const Container = styled.div`
  div {
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 723px;
    margin-left: 10px;
    background-color: var(--grey-0);
    margin-top: 14px;
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
  div{
    width: 343px;
    margin-left:15px;
  }
}

@media(min-width:425px){
    div{
      width: 395px;
    }

    section{
      width:402px;
    }
    
  }

  @media(min-width:768px){
      div{
        width: 740px;
      }

      .remover{
        position: absolute;
        margin-left: 800px;
      }

    }

    @media(min-width:1024px){
      div{
        position:relative;
        width: 390px;
        margin-left: 955px;
        bottom:600px;
      }


    }


`;
