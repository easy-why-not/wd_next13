'use client';
import { useState } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, open, close, toggle };
};
