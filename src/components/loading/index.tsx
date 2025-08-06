import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="w-full h-1 bg-zinc-800 overflow-hidden relative">
      <motion.div
        className="absolute h-full w-1/3 bg-violet-500"
        initial={{ x: '-100%' }}
        animate={{ x: '150%' }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
