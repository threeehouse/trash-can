import { Ref, forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

import { CreateOverlayElement } from './type';

interface Props {
  overlayElement: CreateOverlayElement;
  onExit: () => void;
}

export interface OverlayControlRef {
  close: () => void;
}

export const OverlayController = forwardRef(function (
  { overlayElement: OverlayElement, onExit }: Props,
  ref: Ref<OverlayControlRef>
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(ref, () => ({ close: handleClose }), [handleClose]);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, []);

  return <OverlayElement isOpen={isOpen} close={handleClose} unmount={onExit} />;
});
