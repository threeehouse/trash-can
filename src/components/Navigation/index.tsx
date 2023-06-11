import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { theme } from '../../theme';
import { Button, ButtonType } from '../Button';

type NavButton = {
  homeType: Omit<ButtonType, 'general'>;
  rankType: Omit<ButtonType, 'general'>;
};

const getTypeByPath = (path: string) => {
  switch (path) {
    case '/home':
      return { homeType: 'primary', rankType: 'ghost' };
    case '/rank':
      return { homeType: 'ghost', rankType: 'primary' };
    default:
      return { homeType: 'primary', rankType: 'ghost' };
  }
};

const useNavigation = (path: string) => {
  const [navButton, setNavButton] = useState<NavButton>(getTypeByPath(path));

  const setNav = (path: string) => {
    setNavButton(getTypeByPath(path));
    // switch (path) {
    //   case '/home':
    //     setNavButton({ homeType: 'primary', rankType: 'ghost' });
    //     break;
    //   case '/rank':
    //     setNavButton({ homeType: 'ghost', rankType: 'primary' });
    //     break;
    // }
  };

  return { navButton, setNav };
};

const buttonVariant = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const navVariant = {
  start: {
    x: '-50%',
    y: 200,
  },
  end: {
    x: '-50%',
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Navigation() {
  const router = useRouter();
  const { navButton, setNav } = useNavigation(router.pathname);
  const clickRouter = (path: string) => {
    setNav(path);
    router.push(path, undefined, {
      scroll: false,
      // PageTransition컴포넌트에서 ForwardRef를 통해 받은 ref로도 scroll을 막을 수 있을지?
    });
  };
  return (
    <StyledNav variants={navVariant} initial="start" animate="end">
      <Button
        type={navButton.homeType as ButtonType}
        onClick={() => clickRouter('/home')}
        variants={buttonVariant}
        initial="start"
        animate="end"
      >
        HOME
      </Button>
      <Button
        type={navButton.rankType as ButtonType}
        onClick={() => clickRouter('/rank')}
        variants={buttonVariant}
        initial="start"
        animate="end"
      >
        RANK
      </Button>
    </StyledNav>
  );
}

const StyledNav = styled(motion.nav)`
  background-color: ${theme.colors.gray100};
  border-radius: 32px;
  padding: 6px;
  z-index: 1;
  position: fixed;
  bottom: 12px;
  left: 50%;
  display: flex;
  width: 400px;
`;
