import React from 'react'
import { InputProps } from 'customTypes'
import { Label, Container, Textarea } from './Input.styles'

const CustomTextarea: React.FC<InputProps> = ({ input }) => (
    <Container>
        <Label>{input.label}</Label>
        <Textarea placeholder={input.placeholder} name="text" />
    </Container>
)

export default CustomTextarea
