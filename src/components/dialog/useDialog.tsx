import { useState } from 'react';

export function useDialog() {
  const [open, setOpen] = useState(false);

  function openDialog() {
    setOpen(true);
  }

  function closeDialog() {
    setOpen(false);
  }

  return {
    open,
    openDialog,
    closeDialog,
  };
}
