import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { theme } from '../../theme';
import { Button } from '../Button';

export function Navigation() {
  const router = useRouter();
  const handleRouter = (event, path) => router.replace(path, window.location.href);
  return (
    <StyledNav>
      <Button type="primary" onClick={handleRouter('/home')}>
        HOME
      </Button>
      <Button type="ghost">RANK</Button>
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
