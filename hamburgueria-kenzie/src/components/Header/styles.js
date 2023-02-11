import styled from "styled-components";

export const Container = styled.header`
  header {
    background-color: var(--grey-0);
    height: 80px;
    max-width: 100%;
    padding-left: 115px;
  }

  .title-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-left: -27px;
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
    width: 364px;
    height: 60px;
    background-color: white;
    margin-left: 635px;
    border-radius: 10px;

  }

  .search-but {
    display: flex;
    align-items: center;
  }

  input {
    width: 234px;
    height: 19px;
    border: none;
  }

  input::-webkit-input-placeholder {
    color: var(--grey-50);
  }

  .but-header {
    width: 107px;
    height: 40px;
    background-color: var(--Color-primary);
    border-radius: 8px;
    font-size: 14px;
    color: var(--grey-0);
    border: none;
    margin-left: 2px;
  }

  @media (max-width: 1024px) {
    .input-search {
      margin-left: 330px;
    }
  }

  @media (max-width: 768px) {
    .input-search {
      margin-left: 99px;
    }
  }

@media(max-width:425px){
  .input-search{
    position:absolute;
    left: -68px;
    top: 100px;
  }
}

@media(max-width:375px){
  .input-search{
    left: -100px;
  }
}
`;
