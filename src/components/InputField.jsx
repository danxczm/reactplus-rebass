import {
  InputContainer,
  Input,
  Label,
} from './styles/InputFieldElements.styles';

function InputField({ label }) {
  return (
    <InputContainer>
      <Input placeholder="  " />
      <Label>{label}</Label>
    </InputContainer>
  );
}

export default InputField;
