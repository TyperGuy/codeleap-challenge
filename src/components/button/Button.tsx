import React from 'react'
import { ButtonProps } from 'customTypes'
import { Solid, Outlined } from './Button.styles'

const Button: React.FC<ButtonProps> = ({ button }) =>
    button.variant === 'outlined' ? (
        <Outlined disabled={button.disabled}>{button.text}</Outlined>
    ) : (
        <Solid disabled={button.disabled}>{button.text}</Solid>
    )

export default Button
