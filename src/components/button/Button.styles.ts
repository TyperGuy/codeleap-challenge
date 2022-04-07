import styled from 'styled-components'

const Button = styled.button`
    height: 44px;
    width: 120px;
    font-size: 1em;
    font-style: normal;
    font-weight: 700;
    box-sizing: border-box;
    border: none;
    transition: all 0.15s ease-in-out;
`

export const Solid = styled(Button)`
    color: #fff;
    background-color: #000;
    &:hover {
        background-color: #858585;
        color: #000;
    }
    &:disabled {
        background-color: #d2d2cf;
        cursor: not-allowed;
        color: #fff;
    }
`

export const Outlined = styled(Button)`
    border: 1px solid #000;
    background-color: #fff;
    &:hover {
        background-color: #000;
        color: #fff;
    }
    &:disabled {
        background-color: #d2d2cf;
        cursor: not-allowed;
        color: #fff;
    }
`
