import { motion } from 'framer-motion';

export function SectionTitle({ text }: { text: string }) {
  return (
    <motion.div
      className='mb-8 text-center'
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
    >
      <h2 className='text-3xl font-bold mb-2 relative inline-block'>
        {text}
        <motion.span
          className='absolute left-0 -bottom-1 h-[2px] w-full bg-violet-400 block origin-left'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </h2>
    </motion.div>
  );
}
