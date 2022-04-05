import {  InputType, ButtonType, FlexType } from 'customTypes';
import Textarea from "../inputs/Textarea";
import Button from '../button/Button';
import {Container,Box} from '../../styles/Flex.styles';
import InputField from '../inputs/Input';

const InputProps :  InputType ={
  label:"Some thing", 
  placeholder : "Another Some Thing"
}

const FlexProps : FlexType ={
  justify:"center",
  dir:"column",
  align : "center",
  bg: "#fff",
  height: ""
} 

const ButtonProps : ButtonType ={
  text : "Entrar",
  variant : ""
}

const Form =()=> (
    <Box>
    <Container {...FlexProps}>
      <h2>Whats is on your mind ?</h2>
      <InputField input={InputProps}/>
      <Textarea input={InputProps} />
      <div style={{alignSelf:"end"}}><Button button={ButtonProps}/></div>
    </Container>
    </Box>
  )

export default Form;
