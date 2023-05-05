import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';

const itemVariant = {
  entry: ({ isOdd }: { isOdd: boolean }) => ({
    borderRadius: isOdd ? '50%' : '0%',
  }),
  hover: ({ isOdd }: { isOdd: boolean }) => ({
    borderRadius: isOdd ? '0%' : '50%',
    transition: {
      duration: 0.3,
    },
  }),
};

interface ItemProps extends Partial<HTMLMotionProps<'button'>> {
  index: number;
  imgUrl: string;
  like: number;
  hate: number;
  title: string;
}

export function Item({ index, imgUrl, like, hate, title }: ItemProps) {
  console.log(like, hate, title);
  const isOdd = index % 2 === 1;
  return (
    <StyledItem custom={{ isOdd }} variants={itemVariant} initial="entry" whileHover="hover">
      <StyledImage src={imgUrl} />
    </StyledItem>
  );
}

const StyledImage = styled('img')`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const StyledItem = styled(motion.li)`
  width: 30%;
  padding-bottom: 30%;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  border-radius: ${({ custom: { isOdd } }) => (isOdd ? '50%' : '0%')};
`;
