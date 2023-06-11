import styled from '@emotion/styled';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { ItemList, PageTransition } from '../../components';
import { Item as ItemType } from '../../type';
import { http } from '../../utils';

function Rank({ items }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageTransition>
      <StyledLayout>
        <ItemList items={items} />
      </StyledLayout>
    </PageTransition>
  );
}

export const getStaticProps: GetStaticProps<{
  items: ItemType[];
}> = async () => {
  const res = await http.get('/rank');
  const items = res.data.result;

  return { props: { items }, revalidate: 120 };
};

const StyledLayout = styled('main')`
  max-width: 780px;
  width: 100%;
  margin: 0 auto;
`;

export default Rank;
