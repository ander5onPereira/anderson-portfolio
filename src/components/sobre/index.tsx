import { useActionTranslate } from '../../hooks/useActionTranslate';
import { motion } from 'framer-motion';
import { SectionTitle } from './sectionTitle';
import { fadeUp } from '../../motion/motionVariants';
export default function Sobre() {
  const { translate } = useActionTranslate();
  return (
    <section className='max-w-4xl mx-auto px-6 py-16'>
      <SectionTitle text={translate('aboutTitle')} />

      <motion.p
        className='text-zinc-300 text-lg text-justify leading-relaxed space-y-4'
        variants={fadeUp(0.3)}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <span>{translate('aboutText')}</span>
      </motion.p>
    </section>
  );
}
