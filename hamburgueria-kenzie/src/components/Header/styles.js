import styled from "styled-components";

export const Container = styled.header`

header{
  background-color: var(--grey-0);
  height: 159px;
  width:350px;
}

  .title-header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  h1 {
    color: var(--gray-100);
  }
  h3 {
    color: var(--Color-secondary);
    margin-top: 30px;
  }

  .input-search {
    border: 2px solid #e0e0e0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 325px;
    height: 60px;
    background-color: white;
    margin-left: 15px;
    border-radius: 10px;
  }

  .search-but {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    gap: 70px;
  }

  input {
    width: 123px;
    height: 19px;
    border: none;

  }

  input::-webkit-input-placeholder {
    color: var(--grey-50);
  }

  button {
    width: 107px;
    height: 40px;
    background-color: var(--Color-primary);
    border-radius: 8px;
    font-size: 14px;
    color: var(--grey-0);
    border: none;
  }

  @media(min-width:375px){
  header{
    width: 375px;
  }
}

@media(min-width:425px){
    header{
      width: 415px;
      margin-left: 5px;
    }

    .input-search{
      margin-left:7px;
    }
    
  }

  @media(min-width:768px){
    header{
      width: 760px;
    }
    .input-search{
      margin-left:215px;
    }
  }

  @media(min-width:1024px){
    header{
      width: 1015px;
    }
    .input-search{
      margin-left:350px;
    }
  }

  @media(min-width:1440px){
    header{
      display:flex;
      width:1435px;
      align-items:center;
      height:100px;
    }
    .input-search{
      width:390px;
      margin-left:680px;
    }

    .title-header{
      margin-left: 72px;
    }

    button{
      margin-left:60px;
    }

  }
`;
