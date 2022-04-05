import React from 'react';
import { FlexType,InputType, ButtonType} from 'customTypes';
import { Container, LoginBox as Box } from '../../styles/Flex.styles';
import Button from '../../components/button/Button';
import InputField  from '../../components/inputs/Input';


const FlexProps : FlexType ={
  justify:"center",
  dir:"row",
  align : "center",
  bg: "#9999",
  height: "100vh"
}
const FlexChild : FlexType ={
  justify:"center",
  dir:"column",
  align : "",
  bg: "#fff",
  height: ""
}

const InputProps :  InputType ={
  label:"Please enter your username", 
  placeholder : "John doe"
}
 

const ButtonProps : ButtonType ={
  text : "Enter",
  variant : ""
}

const LoginPage : React.FC = ()=> (
  <Container {...FlexProps}>
    <Box>
      <Container {...FlexChild}>
        <h2>Welcome to CodeLeap network!</h2>
        <InputField input={InputProps}/>
        <div style={{alignSelf:"end"}}><Button button={ButtonProps}/></div>
      </Container>
    </Box>
  </Container>
)


export default LoginPage;