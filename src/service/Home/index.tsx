import styled from '@emotion/styled';

import { ItemList, PageTransition } from '../../components';

function Home() {
  return (
    <PageTransition>
      <StyledLayout>
        <ItemList />
      </StyledLayout>
    </PageTransition>
  );
}

const StyledLayout = styled('main')`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
`;

export default Home;
