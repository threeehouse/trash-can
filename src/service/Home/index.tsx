import { motion } from 'framer-motion';

import { Text } from '../../components';

const pageVariant = {
  // return 함수로 변경
  entry: {
    x: -100,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -100,
    opacity: 0,
  },
};

const transition = { duration: 0.3, ease: 'easeInOut' };

function Home() {
  return (
    <motion.div variants={pageVariant} initial="entry" animate="center" exit="exit" transition={transition}>
      <Text variant="title01">
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
        홈 화면 홈 화면 홈 화면 홈 화면 홈 화면
      </Text>
    </motion.div>
  );
}

export default Home;
