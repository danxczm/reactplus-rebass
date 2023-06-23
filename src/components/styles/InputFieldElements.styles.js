import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 10px;
`;

export const Input = styled.input`
  width: 310px;
  height: 16px;
  background: #f7f7f7;
  font-size: 18px;
  border: 1px solid #b8b8b8;
  border-radius: 10px;
  padding: 16px;

  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0.5px;

  &:focus {
    outline: none;
    background-color: #fefefe;
  }

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translateY(-15px);
    font-size: 10px;
  }
`;

export const Label = styled.span`
  position: absolute;
  left: 16px;
  font-size: 18px;
  color: #999999;
  pointer-events: none;
  transition: 0.6s;
`;
