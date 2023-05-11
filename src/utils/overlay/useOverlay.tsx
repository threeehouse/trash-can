import { useContext, useEffect, useMemo, useRef } from 'react';

import { OverlayControlRef, OverlayController } from './OverlayController';
import { OverlayContext } from './OverlayProvider';
import { CreateOverlayElement } from './type';

let elementId = 1;

export function useOverlay() {
  const context = useContext(OverlayContext);

  if (context === null) {
    throw new Error('OverlayProvider안에서 사용되어야 합니다!');
  }

  const { mount, unmount } = context;

  // AS IS
  // const [id] = useState(() => String(elementId++));
  // TO BE
  const id = String(elementId++);

  const overlayRef = useRef<OverlayControlRef | null>(null);

  useEffect(() => {
    return () => {
      unmount(id);
    };
  }, [unmount, id]);

  return useMemo(
    () => ({
      open: (overlayElement: CreateOverlayElement) => {
        mount(
          id,
          <OverlayController
            ref={overlayRef}
            overlayElement={overlayElement}
            onExit={() => {
              unmount(id);
            }}
          />
        );
      },
      close: () => {
        overlayRef.current?.close();
      },
      exit: () => {
        unmount(id);
      },
    }),
    [id, mount, unmount]
  );
}
