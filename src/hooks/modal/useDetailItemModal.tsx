import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { ComponentProps, useEffect, useState } from 'react';

import { Modal } from './Modal';
import { Button, Image, Text } from '../../components';
import { theme } from '../../theme';
import { overlayKey, useOverlay } from '../overlay';

export const useDetailItemModal = () => {
  const overlay = useOverlay(overlayKey.HOME);
  const openItemModal = (props: Props) => {
    overlay.open(({ isOpen, close }) => (
      <Modal isOpen={isOpen} close={close}>
        <DetailItem {...props} />
      </Modal>
    ));
  };
  return openItemModal;
};

interface Props {
  imgUrl: string;
  title: string;
}

function DetailItem({ imgUrl, title }: Props) {
  const [clicked, setClicked] = useState(false);
  const overlay = useOverlay(overlayKey.MESSAGE);
  return (
    <StyledDetailItem>
      <Text variant="title04" as="h4" color="primary" css={{ marginTop: '10px' }}>
        Rest In Peace
      </Text>
      <Text variant="title03" as="h3" css={{ marginBottom: '20px' }}>
        {title}
      </Text>
      <Image src={imgUrl} alt={title} width={380} height={380} mode="cover" css={{ marginBottom: '20px' }} />
      <Button
        type="general"
        width={180}
        disabled={clicked}
        icon={<Image src="/icon/pray.png" alt="pray Icon" width={20} height={20} />}
        onClick={() => {
          // API Call
          setClicked(true);
          overlay.open(({ isOpen, close }) => <TextBalloon isOpen={isOpen} close={close} />);
        }}
      >
        {clicked ? 'Thank you' : 'Pray for me'}
      </Button>
    </StyledDetailItem>
  );
}

function TextBalloon({ isOpen, close }: Omit<ComponentProps<typeof Modal>, 'children'>) {
  const messages = ['Thank you Bro', 'God Bless You', 'Bye Bye ....'];
  useEffect(() => {
    new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    }).then(() => {
      close();
    });
  });
  return (
    <AnimatePresence>
      {isOpen ? (
        <StyledTextBalloon
          initial={{
            x: '-50%',
            y: '-50%',
            scale: 1.3,
            opacity: 0,
          }}
          animate={{
            x: '-50%',
            y: '-50%',
            scale: 1,
            opacity: 1,
          }}
          exit={{
            x: '-50%',
            y: '-50%',
            scale: 1.3,
            opacity: 0,
          }}
          transition={{ duration: 0.7 }}
        >
          <Text variant="headline" color="gray120">
            {messages[Math.floor(Math.random() * messages.length)]}
          </Text>
        </StyledTextBalloon>
      ) : null}
    </AnimatePresence>
  );
}

const StyledTextBalloon = styled(motion.div)`
  top: 50%;
  left: 50%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 90px;
  border: 1px solid ${theme.colors.gray120};
  border-radius: 100%;
  background-color: ${theme.colors.white};
  z-index: 101;
`;

const StyledDetailItem = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
