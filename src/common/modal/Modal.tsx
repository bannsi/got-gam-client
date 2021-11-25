import React, { FunctionComponent } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  width?: number | string;
  height?: number | string;
}
interface ContentProps {
  width?: number | string;
  height?: number | string;
}

const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-sizing: border-box;
`;

const Modal: FunctionComponent<ModalProps> = ({ visible, onClose, width, height, children }) => {
  return (
    <ReactModal
      closeTimeoutMS={200}
      ariaHideApp={false}
      isOpen={visible}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        },
        content: {
          inset: 'unset',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          border: 'none',
          borderRadius: '16px 16px 0 0',
          padding: '8px 0 0 0 '
        }
      }}
    >
      <Content className="Content" width={width} height={height}>
        {children}
      </Content>
    </ReactModal>
  );
};

export default Modal;
