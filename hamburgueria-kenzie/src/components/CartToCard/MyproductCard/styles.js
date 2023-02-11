import styled from "styled-components";

export const Container = styled.li`


li{
    display:flex;
    align-items:center;
    height:72px;
    color:white;
    margin-left: -30px;
    width: 314px
;
    
}

img{
    width: 70px;
    height: 70px; 
    background-color:var(--grey-20)
}

h5{
    font-weight: 700;
    font-size: 14px;
    color: var(--gray-100);
}

.name-category{
    display:flex;
    flex-direction: column;
    margin-top:85px;
    padding-left: 14px;
}

.but{
    color:var(--grey-50);
    position: relative;
    left: 238px;
    bottom:60px;
    border: none;
    background: none;
}

h4{
    color:var(--grey-20);
    position: relative;
    bottom: 34px;
    right: 5px;
}



`