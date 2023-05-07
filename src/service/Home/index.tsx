import styled from '@emotion/styled';

import { Item, ItemList, PageTransition } from '../../components';

const mockItems = [
  {
    id: 1,
    imgUrl: 'https://openimage.interpark.com/goods_image_big/6/6/1/9/6010956619_l.jpg',
    like: 6,
    hate: 2,
    title: '토끼인형',
  },
  {
    id: 2,
    imgUrl: 'https://m.jalmug.com/web/product/big/201910/b68121701a4ae62c03431063ebb2a622.jpg',
    like: 2,
    hate: 1,
    title: '유리컵',
  },
  {
    id: 3,
    imgUrl: 'https://blog.kakaocdn.net/dn/bkgLt2/btrs72h5a3I/Mu5F5nr5bVB9lLy44jMAP1/img.jpg',
    like: 4,
    hate: 0,
    title: '맥북',
  },
  {
    id: 4,
    imgUrl: 'https://t1.daumcdn.net/cfile/tistory/99A605495E9BFAE136',
    like: 10,
    hate: 20,
    title: '수건',
  },
];

function Home() {
  return (
    <PageTransition>
      <StyledLayout>
        <ItemList>
          {[...mockItems, ...mockItems].map(({ imgUrl, like, hate, title }, index) => (
            <Item key={index} imgUrl={imgUrl} like={like} hate={hate} title={title} />
          ))}
        </ItemList>
      </StyledLayout>
    </PageTransition>
  );
}

const StyledLayout = styled('main')`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

export default Home;
