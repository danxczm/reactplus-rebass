import {
  InputContainer,
  Input,
  Label,
} from "./styles/InputFieldElements.styles";

function InputField({ bg, label, borderColor, textColor, focusColor }) {
  return (
    <InputContainer>
      <Input
        placeholder="  "
        bg={bg}
        borderColor={borderColor}
        textColor={textColor}
        focusColor={focusColor}
      />

      <Label
        bg={bg}
        borderColor={borderColor}
        textColor={textColor}
        focusColor={focusColor}
      >
        {label}
      </Label>
    </InputContainer>
  );
}

export default InputField;
