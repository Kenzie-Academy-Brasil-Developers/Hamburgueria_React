import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 932px;
  top: 104px;
  background-color: var(--grey-0);
  border-radius: 5px 5px 0px 0px;
  width: 364px;

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
    margin-top:0px;
  }

  h3 {
    margin-top: 86px;
    text-align: center;
    color: var(--gray-100);
  }

  h4 {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    color: var(--grey-50);
  }

  div {
    padding-bottom: 60px;
  }

  .removeAll {
    width: 343px;
    height: 60px;
    font-size: 16px;
    text-align: center;
    color: var(--grey-50);
    border: none;
    margin-left: 10px;
    border-radius: 8px;
    background-color: var(--grey-20);
    margin-bottom: 20px;
  }

  .total-money {
    border-top: 4px solid var(--grey-20);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    gap: 243px;
  }

  .total {
    color: var(--gray-100);
    font-weight: 600;
    font-size: 14px;
  }

  @media(max-width:1024px){
    position: absolute;
    top: 105px;
    left: 627px;

  }

  @media(max-width:768px){
    left: 395px;
  }

  @media (max-width: 425px){
       left: 2px;
       top: 474px;
       margin-bottom: 200px;
      max-width:100%;
      
   }
`;
