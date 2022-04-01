import {InputField,Label,Container,Textarea} from './Input.styles';

function CustomInput() {
  return (
    <Container>
      <Label>Meu Label</Label>
      <Textarea placeholder="Describe yourself here" name="text"/>
    </Container>
  );
}

export default CustomInput;
