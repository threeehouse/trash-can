import styled from '@emotion/styled';

import { Item as ItemType } from '../../type';
import { Item } from '../Item';

interface ItemListProps {
  items: ItemType[];
}

export function ItemList({ items }: ItemListProps) {
  return (
    <StyledItemList>
      {items.map(item => (
        <Item key={item._id.toString()} {...item} />
      ))}
    </StyledItemList>
  );
}

const StyledItemList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
