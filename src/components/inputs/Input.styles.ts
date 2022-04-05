import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-Content:left;
  gap:.5em;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px
`;

export const InputField = styled.input`
  width: 100%;;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: .5em;
  font-weight: 400;
  font-size: 14px
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 74px;
  background: #FFFFFF;
  border: 1px solid #777777;
  box-sizing: border-box;
  border-radius: 4px;
  padding-left: .5em;
  padding-top:.5rem;
  font-weight: 400;
  font-size: 14px;
  resize: none;
`;



