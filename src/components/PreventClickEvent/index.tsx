import { PropsWithChildren } from 'react';

export function PreventClickEvent({ children }: PropsWithChildren) {
  return <div onClick={e => e.stopPropagation()}>{children}</div>;
}
