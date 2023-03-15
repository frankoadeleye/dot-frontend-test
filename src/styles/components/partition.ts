import styled from "styled-components";

export const PartitionBlock = styled.div`
  width: 100%;
  padding: 10px 20px;
  margin: 20px 0px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.bGColor.heading};
  border: 1px solid ${({ theme }) => theme.borderColor.category};
`;
