'use client';

import { useEffect, useState } from 'react';
import { Button } from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from './drawer';
import { cn } from './lib/cn';

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description: string;
  closeModal?: () => void;
  className?: string;
  desktopChildrenClassName?: string;
  mobileChildrenClassName?: string;
}

export function ResponsiveModal({
  children,
  open,
  setOpen,
  title,
  description,
  closeModal,
  className,
  desktopChildrenClassName,
  mobileChildrenClassName,
}: ResponsiveModalProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleCloseModal = () => {
    setOpen(false);
    closeModal?.();
  };

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleCloseModal}>
        <DialogContent className={cn('sm:max-w-[425px]', className)}>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div
            className={cn(
              'px-2 overflow-y-auto max-h-[60vh]',
              desktopChildrenClassName,
            )}
          >
            {children}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={handleCloseModal}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div
          className={cn(
            'max-h-[85vh] overflow-y-auto px-4 pb-8',
            mobileChildrenClassName,
          )}
        >
          <div className="px-2 overflow-y-auto max-h-[60vh]">{children}</div>
        </div>
        <DrawerClose asChild>
          <Button variant="ghost" className="sr-only">
            Close
          </Button>
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
}
