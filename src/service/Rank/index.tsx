import { PageTransition, Text } from '../../components';

function Rank() {
  return (
    <PageTransition>
      <Text variant="title01" color="primary">
        랭킹!
      </Text>
    </PageTransition>
  );
}

// export const getServerSideProps: GetServerSideProps<{
//   items: Item;
// }> = async () => {
//   // const res = await http.get('/items');
//   // const items = res.data.result;
//   // console.log("server", items);
//   const items = ['hi'];

//   return { props: { items } };
// };

export default Rank;
