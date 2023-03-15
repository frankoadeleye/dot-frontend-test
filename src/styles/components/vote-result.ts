import styled from "styled-components";

export const VotesResult = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.text};
  flex-direction: column;
  width: 90%;
  margin: auto;
  font-size: 18px;
  line-height: 28px;
`;
