import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import { theme } from '../../theme';
import { Text } from '../Text';

const itemVariant = {
  entry: {
    borderRadius: '50%',
  },
  hover: {
    borderRadius: '10%',
    backgroundColor: theme.colors.primary_deep,
    transition: {
      duration: 0.2,
    },
    descOpacity: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  },
};

const imgVariant = {
  hover: {
    opacity: 0.1,
    scale: 1.1,
    transition: {
      duration: 0.2,
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
      duration: 0.3,
    },
  },
  leave: {
    opacity: 0,
    y: 25,
    x: '-50%',
    transition: {
      duration: 1,
    },
  },
};

interface ItemProps extends Partial<HTMLMotionProps<'button'>> {
  imgUrl: string;
  like: number;
  title: string;
}

export function Item({ imgUrl, like, title }: ItemProps) {
  console.log(like, title);
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <StyledItem
      variants={itemVariant}
      initial="entry"
      whileHover="hover"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <StyledImage src={imgUrl} alt={title} variants={imgVariant} whileHover="hover" />
      {hovered && (
        <StyledDescription variants={descVariant} initial="entry" animate="animate" exit="leave">
          <Image src="/icon/like.png" alt="Like Icon" width={25} height={25} />
          <Text variant="title03" color="gray120">
            {like}
          </Text>
        </StyledDescription>
      )}
    </StyledItem>
  );
}

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  position: absolute;
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
  padding-bottom: 30%;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
`;