import styled from "styled-components";

export const VotingPageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const NomineesBlock = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;

  @keyframes blinking {
    0% {
      background-color: ${({ theme }) => theme.borderColor.nomineeCard};
    }
    100% {
      background-color: ${({ theme }) => theme.bGColor.nomineeCardHover};
    }
  }

  @media (min-width: 550px) {
    width: 542px;
  }

  @media (min-width: 840px) {
    width: 832px;
  }

  @media (min-width: 1130px) {
    width: 1122px;
  }

  @media (min-width: 1500px) {
    width: 1412px;
  }
`;

export const NomineesSectionWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 40px;
  align-self: end;
`;
