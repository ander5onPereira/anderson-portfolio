import { useActionTranslate } from '../hooks/useActionTranslate';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SectionTitle } from './sobre/sectionTitle';

export default function Contato() {
  const { translate } = useActionTranslate();
  return (
    <section className='bg-[linear-gradient(to_bottom,_rgba(255,255,255,0.01)_10%,_rgba(255,255,255,0.05)_60%)] py-16 px-6 text-center relative'>
      <div className='max-w-2xl mx-auto'>
        <SectionTitle text={translate('contactTitle')} />

        <motion.p
          className='text-zinc-300 mb-8 text-lg'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {translate('contactText')}
        </motion.p>

        <motion.div
          className='flex justify-center flex-wrap gap-6 text-violet-400 text-base'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {[
            {
              label: 'anderson.carro.95@gmail.com',
              href: 'mailto:anderson.carro.95@gmail.com',
              icon: <FaEnvelope className='text-xl' />,
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/andersonpereirarodrigues',
              icon: <FaLinkedin className='text-xl' />,
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ander5onPereira',
              icon: <FaGithub className='text-xl' />,
            },
          ].map(({ label, href, icon }) => (
            <motion.a
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 hover:underline transition'
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {icon}
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
