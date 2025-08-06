import { useActionTranslate } from '../../hooks/useActionTranslate';
import { motion } from 'framer-motion';
import { Particula } from './particula';
import { useDialog } from '../dialog/useDialog';
import { MdOutlineEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { lazy, Suspense } from 'react';
import LoadingFallback from '../loading/fallback';

const DialogCuston = lazy(() => import('../dialog'));

export default function Hero() {
  const { translate } = useActionTranslate();
  const { open, closeDialog, openDialog } = useDialog();

  return (
    <section className='relative overflow-hidden text-center py-10 md:py-28 px-6 bg-zinc-950 min-h-[85dvh] flex flex-col justify-center'>
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-purple-800/40 via-transparent to-violet-600/20 blur-[100px]' />
        <div className='absolute inset-0 bg-gradient-radial from-[#C546FF]/20 via-transparent to-transparent blur-[180px]' />
        <Particula />
      </div>

      <div className='flex flex-col-reverse lg:flex-row items-center justify-around w-full max-w-[90dvw]  gap-10 relative z-10'>
        <div className='w-1/2 md:w-full hidden min-[1720px]:block ' />
        <div className='w-full lg:w-full mx-auto text-center px-4  '>
          <motion.h1
            className='md:whitespace-nowrap text-4xl lg:text-5xl font-bold text-white drop-shadow-xl font-dancing'
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Anderson Pereira Rodrigues
          </motion.h1>

          <motion.p
            className='md:whitespace-nowrap text-xl text-zinc-300 mt-4 mb-8'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {translate('subtitle')}
          </motion.p>

          <motion.div
            className='flex justify-center  flex-wrap gap-4'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              type='button'
              className='bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full transition shadow-lg cursor-pointer'
              onClick={openDialog}
            >
              {translate('contactBtn')}
            </button>
            <Suspense fallback={<LoadingFallback />}>
              <DialogCuston onClose={closeDialog} open={open} variant='small'>
                {open && (
                  <div className='flex flex-col md:flex-row justify-around py-10 gap-5'>
                    <a
                      href='mailto:anderson.carro.95@gmail.com'
                      className='flex justify-center items-center gap-5 bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full transition shadow-lg'
                    >
                      <MdOutlineEmail className='size-5' /> {translate('email')}
                    </a>
                    <a
                      href={import.meta.env.VITE_WHATSAPP || '#'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex justify-center items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full transition shadow-lg'
                    >
                      <FaWhatsapp className='size-5' /> {translate('whatsapp')}
                    </a>
                  </div>
                )}
              </DialogCuston>
            </Suspense>
            <a
              href='/curriculo/Anderson_Pereira_Rodrigues_Front_End.pdf'
              download
              className='border border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white px-6 py-2 rounded-full transition shadow-lg'
            >
              {translate('cvBtn')}
            </a>
          </motion.div>
        </div>

        <motion.div
          className='relative w-full lg:w-1/2 flex  items-center justify-center lg:justify-end px-4'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className='absolute -z-10 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(197,70,255,0.25)_0%,_transparent_70%)] blur-3xl' />
          <img
            src='/anderson.png'
            alt='Foto Anderson'
            className='w-72 lg:w-96 object-contain rounded-full shadow-[0_0_60px_rgba(197,70,255,0.3)]'
          />
        </motion.div>
      </div>
    </section>
  );
}
