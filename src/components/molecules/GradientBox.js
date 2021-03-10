import  React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const GridBox = styled.div`
    background: #ffffff;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to ${props => props.config.vDir} ${props => props.config.hDir}, ${props => props.config.color1} , ${props => props.config.color2});
`;

const GridWrapper = styled.div`
    padding: 30px;
    width: 300px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 10px 30px -15px rgb(0 0 0 / 20%);
`;

const Pre = styled.pre`
    white-space: pre-wrap;
    padding: 20px;
    background: #000;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
`;

export default class GrdientBox extends Component {
    constructor(props) {
        super(props);
        this.state= {
            color1: '#daffff',
            color2: '#ddfffd',
            hDir: 'left', // left, right
            vDir: 'bottom' // top, bottom
        };
    };

    generateColor = () => {
        const pattern1 = 'abcdef'.split('');
        const pattern2= 'cdef'.split('');
        let color1 = '#';
        let color2 = '#';
        [...Array(6)].map((item, key) =>{ 
            return (
                color1 += pattern1[Math.floor(Math.random() * pattern1.length)],
                color2 += pattern2[Math.floor(Math.random() * pattern2.length)]
            );
        });
       this.setState({ color1: color1, color2: color2 });

    };

    render(){
        return(
            <GridBox config={this.state}>
                <GridWrapper>
                    <Button handleClick={() => this.generateColor()} name="Generate" />
                    <Pre>
                        background: linear-gradient(to {this.state.vDir} {this.state.hDir},{this.state.color1}, {this.state.color2});
                    </Pre>
                </GridWrapper>
            </GridBox>
        )
    }
};
