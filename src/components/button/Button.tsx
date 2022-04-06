import React from 'react'
import { ButtonProps } from 'customTypes'
import { Solid, Outlined } from './Button.styles'

const Button: React.FC<ButtonProps> = ({ button }) =>
    button.variant === 'outlined' ? (
        <Outlined>{button.text}</Outlined>
    ) : (
        <Solid>{button.text}</Solid>
    )

export default Button
