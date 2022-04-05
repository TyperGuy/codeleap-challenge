declare module 'customTypes' {
  type InputType = {
    label: string,
    placeholder: string
  };
  type FlexType = {
    justify: string,
    dir: string,
    align : string,
    bg:string,
    height: string
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
  interface FlexProps {
    Flex : FlexType
  };


}

module.exports = {
  InputType,
  InputProps,
  ButtonType,
  ButtonProps,
  FlexType,
  FlexProps
};