import styled from "styled-components";

export const NomineeSelectBtn = styled.button`
  outline-style: none;
  border-radius: 8px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0px 10px;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.bGColor.selectButton};
`;

export const SubmitButton = styled.button`
  outline-style: none;
  text-transform: uppercase;
  border-radius: 8px;
  min-height: 60px;
  font-size: 24px;
  cursor: pointer;
  align-self: end;
  padding: 0px 10px;
  margin: 40px 0px;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.bGColor.submitButton};
  border-style: solid;
  border-width: 2px;
  font-weight: bold;
  border-color: ${({ theme }) => theme.borderColor.submitButton};
`;
