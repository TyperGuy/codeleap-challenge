import React from 'react';
import { InputProps } from 'customTypes';
import {InputField,Label,Container} from './Input.styles';

const CustomInput: React.FC <InputProps> = ({input}) => (
    <Container>
      <Label>{input.label}</Label>
      <InputField placeholder={input.placeholder} name="text"/>
    </Container>
  )

export default CustomInput;
