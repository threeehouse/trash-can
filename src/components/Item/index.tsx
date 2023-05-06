import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
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
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  leave: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

interface ItemProps extends Partial<HTMLMotionProps<'button'>> {
  imgUrl: string;
  like: number;
  hate: number;
  title: string;
}

export function Item({ imgUrl, like, hate, title }: ItemProps) {
  console.log(like, hate, title);
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
      {hovered ? (
        <StyledDescription variants={descVariant} initial="entry" animate="animate" exit="leave">
          <Text variant="title04">{title}</Text>
        </StyledDescription>
      ) : null}
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* opacity: 0;
  transition: opacity 0.2s ease-in-out; */
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
  /* justify-content: center; */
  /* align-items: center; */
`;
