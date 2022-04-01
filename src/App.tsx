import './App.css';
import {  InputType, ButtonType } from 'customTypes';
import Textarea from './components/inputs/Textarea';
import Button from './components/button/Button';

const InputProps :  InputType ={
  label:"Some thing", 
  placeholder : "Another Some Thing"
}

const ButtonProps : ButtonType ={
  text : "Qualquer Coisa",
  variant : "outlined"
}

function App() {
  return (
    <div className="App">
      <Textarea input={InputProps} />
      <Button button={ButtonProps}/>
    </div>
  );
}

export default App;
