import styled from 'styled-components';

export const PlainButton = styled.button.attrs({ type: 'button' })`
  width: 344px;
  height: 50px;
  background-color: inherit;
  backdrop-filter: blur(100px);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  // color: #5c5c5c;
  color: ${({ 'data-active-dark': active, theme }) =>
    active ? theme.generalGentleGray : theme.generalDavysGray};

  /* ------------------------------------------------ */
  cursor: pointer;
  margin: 15px;
`;

export const LightButton = styled(PlainButton)`
  background-color: ${({ 'data-active-light': active, theme }) =>
    active ? theme.generalPebblePebble : theme.generalSilverSilver};
  /* color: ${theme => theme.generalGhostWhite}; */
  color: #f7f7f7;
`;

// Extending Styles
export const DarkButton = styled(PlainButton)`
  background-color: ${({ 'data-active-dark': active, theme }) =>
    active ? theme.generalGentleGray : theme.darkThemeShadesOn};
  color: ${({ 'data-active-dark': active, theme }) =>
    active ? theme.generalPebblePebble : theme.generalSilverOp50};
`;
