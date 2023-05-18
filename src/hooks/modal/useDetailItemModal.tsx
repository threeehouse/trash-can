import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { Modal } from './Modal';
import { Image, Text } from '../../components';
import { overlayKey, useOverlay } from '../overlay';

export const useDetailItemModal = () => {
  const overlay = useOverlay(overlayKey.HOME);
  const openItemModal = (props: ComponentProps<typeof DetailItem>) => {
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
  return (
    <StyledDetailItem>
      <Text variant="title04" as="h4" color="primary">
        Rest In Peace
      </Text>
      <Text variant="title03" as="h3">
        {title}
      </Text>
      <Image src={imgUrl} alt={title} width={350} height={350} mode="cover" />
      <Text variant="title04" as="h3">
        {pray}
      </Text>
    </StyledDetailItem>
  );
}

const StyledDetailItem = styled('div')`
  display: block;
`;
