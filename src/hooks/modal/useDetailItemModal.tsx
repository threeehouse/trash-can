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
  like: number;
  title: string;
}

function DetailItem({ imgUrl, like, title }: Props) {
  return (
    <div>
      <Text variant="title04">{title}</Text>
      <Text variant="title04">{like}</Text>
      <Image src={imgUrl} alt={title} width={300} height={300} mode="cover" />
    </div>
  );
}
