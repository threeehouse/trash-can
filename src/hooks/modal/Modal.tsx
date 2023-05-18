import styled from '@emotion/styled';

import { PreventClickEvent } from '../../components';
import { theme } from '../../theme';

interface Props {
  isOpen: boolean;
  close: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, close, children }: Props) {
  return isOpen ? (
    <Dimmer
      onClick={() => {
        close();
      }}
    >
      <PreventClickEvent>
        <StyledModal>{children}</StyledModal>
      </PreventClickEvent>
    </Dimmer>
  ) : null;
}

const StyledModal = styled.div`
  text-align: center;
  padding: 28px;
  width: 450px;
  background-color: ${theme.colors.gray110};
  border-radius: 16px;
  z-index: 100;
  margin: auto;
`;

const Dimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
