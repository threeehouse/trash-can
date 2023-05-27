// export { default } from '../../service/Rank';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PageTransition, Text } from '../../components';
import { Item } from '../../type';
import { http } from '../../utils';

function Rank({ items }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(items);
  // http.get('./home/items').then(data => console.log(data));
  return (
    <PageTransition>
      <Text variant="title01" color="primary">
        랭킹!
      </Text>
    </PageTransition>
  );
}

export const getServerSideProps: GetServerSideProps<{
  items: Item;
}> = async () => {
  const res = await http.get('/home/items');
  const items = res.data.result;
  console.log('server', items);
  // const items = ["hi"]

  return { props: { items } };
};

export default Rank;
