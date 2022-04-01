import {InputField,Label,Container} from './Input.styles';

function CustomInput() {
  return (
    <Container>
      <Label>Meu Label</Label>
      <InputField placeholder="some thing like this" type="text" name="text"/>
    </Container>
  );
}

export default CustomInput;
