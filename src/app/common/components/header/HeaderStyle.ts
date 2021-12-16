import styled from 'styled-components';


const HeaderStyle = styled.header`
    display: flex;
    z-index: 100;
    background-color: #292e44;
    color: #FFF;
    height: 65px;
    padding: 0;
    box-shadow: 0 10px 30px 0 rgb(82 63 105 / 5%);
    .dropdown-container {
        flex: 2
    }
`;

const Hamburger = styled.button`
    width: 15%;
    height: 4px;
    background-color: #767b89;
    margin: 1px 10px;
    margin-right: 20px;
    position: relative;
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 39%;
        border-top: 4px solid #767b89;
        top: 214%;
        left: 0;
    }
    &:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 25%;
        border-top: 4px solid #767b89;
        top: 400%;
        left: 0%;
        
    }

`

const CustomDropdown = styled.select`
    width: 110px;
    font-size: 14px;
    background-color: #292e44;
    outline: none;
    border: none;
`

const Title = styled.h1`
    color: #fff;
    margin-right: 30px;
    margin-left: 30px;

`

export { HeaderStyle, Hamburger, CustomDropdown, Title } 