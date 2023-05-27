import styled from '@emotion/styled';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { ItemList, PageTransition } from '../../components';
import { Item as ItemType } from '../../type';
import { http } from '../../utils';

function Home({ items }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageTransition>
      <StyledLayout>
        <ItemList items={items} />
      </StyledLayout>
    </PageTransition>
  );
}

export const getServerSideProps: GetServerSideProps<{
  items: ItemType[];
}> = async () => {
  const res = await http.get('/home/items');
  const items = res.data.result;

  return { props: { items } };
};

const StyledLayout = styled('main')`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
`;

export default Home;
