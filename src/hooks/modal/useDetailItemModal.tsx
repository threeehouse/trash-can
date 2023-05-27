import styled from '@emotion/styled';
import { useState } from 'react';

import { Modal } from './Modal';
import { Button, Image, Text } from '../../components';
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
  pray: number;
  title: string;
}

function DetailItem({ imgUrl, pray, title }: Props) {
  const [clicked, setClicked] = useState(false);
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
        type={clicked ? 'primary' : 'general'}
        width={100}
        icon={<Image src="/icon/pray.png" alt="pray Icon" width={20} height={20} />}
        onClick={() => setClicked(true)}
      >
        {pray}
      </Button>
    </StyledDetailItem>
  );
}

const StyledDetailItem = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
