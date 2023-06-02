import styled from '@emotion/styled';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { useDetailItemModal } from '../../hooks';
import { theme } from '../../theme';
import { Item as ItemType } from '../../type';
import { Image as ItemImage } from '../Image';
import { Text } from '../Text';

const itemVariant = {
  entry: {
    scale: 0.6,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const descVariant = {
  entry: {
    opacity: 0,
    y: 25,
    x: '-50%',
  },
  animate: {
    opacity: 1,
    y: '50%',
    x: '-50%',
    transition: {
      duration: 0.2,
    },
  },
  leave: {
    opacity: 0,
    y: 25,
    x: '-50%',
    transition: {
      duration: 0.2,
    },
  },
};

type ItemProps = ItemType & Partial<HTMLMotionProps<'button'>>;

export function Item({ imgUrl, pray, title, _id }: ItemProps) {
  const [hovered, setHovered] = useState(false);
  const openItemModal = useDetailItemModal();

  return (
    <AnimatePresence>
      <StyledItem
        variants={itemVariant}
        initial="entry"
        whileInView="animate"
        viewport={{ once: true }}
        onClick={() => {
          openItemModal({ imgUrl, title, _id });
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <StyledImage lazy={true} src={imgUrl} alt={title} width={100} height={100} mode="cover" threshold={0.1} />
        <AnimatePresence mode="wait">
          {hovered && (
            <StyledDescription variants={descVariant} initial="entry" animate="animate" exit="leave">
              <Image src="/icon/pray.png" alt="pray Icon" width={25} height={25} />
              <Text variant="title03" color="gray120">
                {pray}
              </Text>
            </StyledDescription>
          )}
        </AnimatePresence>
      </StyledItem>
    </AnimatePresence>
  );
}

const StyledImage = styled(ItemImage)`
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(30px);
`;

const StyledDescription = styled(motion.div)`
  position: absolute;
  display: flex;
  gap: 10px;
  align-items: center;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.colors.gray110};
`;

const StyledItem = styled(motion.li)`
  width: 30%;
  border-radius: 50%;
  padding-bottom: 35%;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
`;
