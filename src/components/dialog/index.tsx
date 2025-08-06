import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
interface DialogProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  open?: boolean;
  onClose: () => void;
  titleClassName?: string;
  variant?: 'small' | 'default' | 'large' | 'full';
}
export default function DialogCuston({
  open,
  onClose,
  title,
  titleClassName,
  className,
  variant = 'default',
  children,
}: DialogProps) {
  const sizeClasses = {
    small: 'max-w-sm',
    default: 'max-w-lg',
    large: 'max-w-xl',
    full: 'max-w-screen h-[95dvh]',
  };

  return (
    <Dialog
      open={open}
      as='div'
      className='relative z-10 focus:outline-none '
      onClose={onClose}
    >
      <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel
            transition
            className={twMerge(
              'w-full max-w-md rounded-xl bg-gray-950 border-violet-900 shadow-lg shadow-violet-600 border p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0',
              className,
              sizeClasses[variant]
            )}
          >
            <DialogTitle
              as='h3'
              className={twMerge(
                'text-base/7 font-medium text-white',
                titleClassName
              )}
            >
              {title}
            </DialogTitle>
            <div>{children}</div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
