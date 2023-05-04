import { HTMLMotionProps, motion } from 'framer-motion';
import React from 'react';

type PageTransitionProps = HTMLMotionProps<'div'>;

export function PageTransition({ children, ...rest }: PageTransitionProps) {
  const onTheRight = {
    x: '100%',
    opacity: 0,
  };
  const inTheCenter = {
    x: 0,
    opacity: 1,
  };
  const onTheLeft = {
    x: '-100%',
    opacity: 0,
  };

  const transition = { duration: 0.6 };

  return (
    <motion.div
      style={{ position: 'absolute' }}
      layout={true}
      initial={onTheRight}
      animate={inTheCenter}
      exit={onTheLeft}
      transition={transition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
