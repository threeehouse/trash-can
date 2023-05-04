import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { theme } from '../../theme';
import { Button, ButtonType } from '../Button';

type NavButton = {
  homeType: ButtonType;
  rankType: ButtonType;
};

const useNavigation = () => {
  const [navButton, setNavButton] = useState<NavButton>({
    homeType: 'primary',
    rankType: 'ghost',
  });

  const setNav = (path: string) => {
    switch (path) {
      case '/home':
        setNavButton({ homeType: 'primary', rankType: 'ghost' });
        break;
      case '/rank':
        setNavButton({ homeType: 'ghost', rankType: 'primary' });
        break;
    }
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

export function Navigation() {
  const router = useRouter();
  const { navButton, setNav } = useNavigation();
  const clickRouter = (path: string) => {
    setNav(path);
    router.push(path);
  };
  return (
    <StyledNav>
      <Button
        type={navButton.homeType}
        onClick={() => clickRouter('/home')}
        variants={buttonVariant}
        initial="start"
        animate="end"
      >
        HOME
      </Button>
      <Button
        type={navButton.rankType}
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

const StyledNav = styled('nav')`
  background-color: ${theme.colors.gray100};
  border-radius: 32px;
  padding: 6px;
  z-index: 1;
  position: fixed;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 400px;
`;
