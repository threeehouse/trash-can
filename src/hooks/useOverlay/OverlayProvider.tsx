import { Fragment, PropsWithChildren, ReactNode, createContext, useCallback, useMemo, useState } from 'react';

export const OverlayContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null);

export function OverlayProvider({ children }: PropsWithChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(new Map());
  const mount = useCallback((id: string, element: ReactNode) => {
    setOverlayById(_overlayById => new Map(_overlayById).set(id, element));
  }, []);

  const unmount = useCallback((id: string) => {
    setOverlayById(_overlayById => {
      const cloneMap = new Map(_overlayById);
      if (cloneMap.delete(id)) {
        return cloneMap;
      } else {
        throw new Error('존재하지 않는 Overlay Id 입니다.');
      }
    });
  }, []);

  const context = useMemo(() => ({ mount, unmount }), [mount, unmount]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlayById.entries()].map(([id, element]) => (
        <Fragment key={id}>{element}</Fragment>
      ))}
    </OverlayContext.Provider>
  );
}
