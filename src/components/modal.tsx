import {
  ModalBlock,
  ModalContentBlock,
  Close,
  ModalTextContent,
} from "src/styles/components/modal";

function Modal(props) {
  const divStyle = {
    display: props.displayModal ? "block" : "none",
  };
  function closeModal(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    props.closeModal();
  }
  return (
    <ModalBlock onClick={closeModal} style={divStyle}>
      <ModalContentBlock onClick={(e) => e.stopPropagation()}>
        <Close onClick={closeModal}>&times;</Close>
        <ModalTextContent>{props.children}</ModalTextContent>
      </ModalContentBlock>
    </ModalBlock>
  );
}

export default Modal;
