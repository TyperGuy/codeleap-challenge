declare module 'customTypes' {
  type InputType = {
    label: string,
    placeholder: string
  };

  type ButtonType = {
    text : string,
    variant : string
  };

  interface InputProps {
    input: InputType
  };

  interface ButtonProps {
    button: ButtonTypes
  };

}

module.exports = {
  InputType,
  InputProps,
  ButtonType,
  ButtonProps
};