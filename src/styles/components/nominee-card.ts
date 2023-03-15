import styled from "styled-components";

export const NomineeCardBlock = styled.div<{ isSelected: boolean }>`
  width: 250px;
  height: 280px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.bGColor.nomineeCard};
  box-sizing: border-box;
  border-style: solid;
  border-width: 2px;
  border-color: ${({ theme }) => theme.borderColor.nomineeCard};
  cursor: pointer;
  transition: 0.1s;
  ${(props) => (props.isSelected ? "background: #d5e8d4" : "")};
  animation: ${(props) => (props.isSelected ? "blinking 1s" : "")};

  &:hover {
    background: ${({ theme }) => theme.bGColor.nomineeCardHover};
  }
`;

export const NomineeName = styled.div`
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.color.text};
`;

export const NomineeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
