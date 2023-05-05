import styled from '@emotion/styled';

interface ItemListProps {
  children: React.ReactNode;
}

export function ItemList({ children }: ItemListProps) {
  return <StyledItemList>{children}</StyledItemList>;
}

const StyledItemList = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
