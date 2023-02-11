import styled from "styled-components";

export const Container = styled.li`
li{
    display:flex;
    flex-direction: column;
    justify-content:center;
    height:280px;
    padding:-26px;
    width: 215px;
    margin:10px;
    background-image: linear-gradient(to bottom,var(--grey-0) 10%,var(--grey-20) , white,white,white);
    border: 2px solid #e0e0e0;
    border-radius:10px;
    padding-right: 14px
}
img{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left: 55px;
    margin-bottom: 47px;
    width: 118px;   
}
h3{
    position:relative;
    bottom:53px;
    left: 20px;
    color:var(--gray-100);
}
span{
    position:relative;
    bottom:65px;
    left: 20px;
    color: #828282;
    font-size: .75rem;
    font-weight: 400;
}
small{
    position:relative;
    bottom:55px;
    left: 20px;
    color: #27ae60;
    font-size: 16px;
    font-weight: 600;
}
button{
    position:relative;
    bottom:45px;
    left: 20px;
    background-color: #27ae60;
    border: none;
    border-radius: 7px;
    color: #fff;
    font-size: .845rem;
    font-weight: 600;
    padding: 0.7rem 0.9rem;
    transition: .3s ease-in-out;
    width: 40%;
}

`