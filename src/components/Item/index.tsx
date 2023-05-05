import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';

import { theme } from '../../theme';

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
  },
};

const imgVariant = {
  hover: {
    opacity: 0.2,
    scale: 1.1,
    transition: {
      duration: 0.2,
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
  return (
    <StyledItem variants={itemVariant} initial="entry" whileHover="hover">
      <StyledImage src={imgUrl} variants={imgVariant} whileHover="hover" />
    </StyledItem>
  );
}

const StyledImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  /* opacity: 0; */
  position: absolute;
`;

const StyledItem = styled(motion.li)`
  width: 30%;
  padding-bottom: 30%;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;
