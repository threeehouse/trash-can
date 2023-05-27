import styled from '@emotion/styled';

import { Item } from '../Item';

const mockItems = [
  {
    _id: 1,
    imgUrl: 'https://openimage.interpark.com/goods_image_big/6/6/1/9/6010956619_l.jpg',
    pray: 6,
    hate: 2,
    title: '토끼인형',
    userIP: '1.1.1.1',
  },
  {
    _id: 2,
    imgUrl: 'https://m.jalmug.com/web/product/big/201910/b68121701a4ae62c03431063ebb2a622.jpg',
    pray: 2,
    hate: 1,
    title: '유리컵',
    userIP: '1.1.1.1',
  },
  {
    _id: 3,
    imgUrl: 'https://blog.kakaocdn.net/dn/bkgLt2/btrs72h5a3I/Mu5F5nr5bVB9lLy44jMAP1/img.jpg',
    pray: 4,
    hate: 0,
    title: '맥북',
    userIP: '1.1.1.1',
  },
  {
    _id: 4,
    imgUrl: 'https://t1.daumcdn.net/cfile/tistory/99A605495E9BFAE136',
    pray: 10,
    hate: 20,
    title: '수건',
    userIP: '1.1.1.1',
  },
];

export function ItemList() {
  return (
    <StyledItemList>
      {[...mockItems, ...mockItems, ...mockItems, ...mockItems].map(item => (
        <Item key={item._id} {...item} />
      ))}
    </StyledItemList>
  );
}

const StyledItemList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
