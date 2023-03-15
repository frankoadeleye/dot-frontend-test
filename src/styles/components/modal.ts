import styled from "styled-components";

export const ModalBlock = styled.div`
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: auto;
  padding-top: 80px;
`;

export const ModalContentBlock = styled.div`
  background-color: white;
  width: 90%;
  max-width: 640px;
  height: 70%;
  margin: auto;
  padding: 10px;
  border: 1px solid #121212;
  border-radius: 20px;

  @media (min-width: 600px) {
    width: 70%;
  }
`;

export const ModalTextContent = styled.div`
  height: 90%;
  overflow-y: scroll;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const Close = styled.span`
  color: #aaaaaa;
  float: right; /* Positioned to the right of the parent container whichever size it is */
  font-size: 25px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
