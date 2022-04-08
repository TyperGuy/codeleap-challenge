import React from 'react'
import { ButtonProps } from 'customTypes'
import { Solid, Outlined } from './Button.styles'

const Button: React.FC<ButtonProps> = ({ button }) =>
    button.variant === 'outlined' ? (
        <Outlined onClick={button.onClick} disabled={button.disabled}>{button.text}</Outlined>
    ) : (
        <Solid onClick={button.onClick} disabled={button.disabled}>{button.text}</Solid>
    )

export default Button
