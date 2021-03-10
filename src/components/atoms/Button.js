import React, { Component } from "react";
import styled from 'styled-components';

const CustomButtom = styled.button`
    border-radius:45px;
    padding:15px 0;
    width:100%;
    text-align:center;
    border: none;
    background: #45ab74;
    outline:none;
    font-size:15px;
    cursor:pointer;
    color:#fff;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;

    :hover{
        box-shadow: 0 10px 30px -15px rgb(0 0 0 / 90%);
    }
`;


export default class Button extends Component {
    render(){
        const { name, handleClick } = this.props;
        return(
            <CustomButtom onClick={handleClick}>{name}</CustomButtom>
        )
    }
};
