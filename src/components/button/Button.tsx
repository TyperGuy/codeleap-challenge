import React from 'react';
import { ButtonProps } from 'customTypes';
import {Solid,Outlined} from './Button.styles';

const Button : React.FC<ButtonProps> = ({button}) => (
    (button.variants || button.variants==='text')?
      <Solid>{button.text}</Solid> :
      <Outlined>{button.text}</Outlined>
    
  )

export default Button;
