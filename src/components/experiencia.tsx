import { useActionTranslate } from '../hooks/useActionTranslate';
import { motion } from 'framer-motion';
import { SectionTitle } from './sobre/sectionTitle';
import AutoScrollSlider from './autoScrollSlider';
import { Link } from '@tanstack/react-router';
export default function Experiencia() {
  const { translate } = useActionTranslate();
  const experienceList = [
    {
      company: 'ARPDev Desenvolvimento',
      period: translate('experienceArp'),
      href: 'https://arpdev.com.br/',
    },
    {
      company: 'Play Gaming Group (UK)',
      period: '2023–2025',
      href: 'https://playgaming.group/',
    },
    {
      company: '123Projetei',
      period: '2022–2023',
      href: 'http://www.123projetei.com/',
    },
    { company: 'GenShop', period: '2021–2022', href: 'https://gen.com.br/' },
    {
      company: 'INHD Sistemas',
      period: '2020–2021',
      href: 'http://inhd.com.br',
    },
  ];

  return (
    <section className='relative  py-14 bg-zinc-950 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.05),_transparent_80%)]'>
      <div className='max-w-4xl mx-auto '>
        <SectionTitle text={translate('expTitle')} />

        <div className='absolute left-0 top-1/2 w-[60dvw] h-[500px] bg-[radial-gradient(circle,_rgba(197,70,255,0.2)_0%,_transparent_70%)] transform -translate-x-1/2 -translate-y-1/2 blur-2xl' />
        <motion.ul
          className='text-zinc-200 space-y-4 mt-6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <AutoScrollSlider
            interval={5000}
            items={experienceList.map((item) => (
              <Link key={item.company} to={item.href} target='_blank'>
                <motion.li
                  className='group text-base text-center text-white hover:text-violet-500 transition-colors'
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <strong className='block group-hover:text-violet-500 transition-colors'>
                    {item.company}
                  </strong>
                  <span className='block group-hover:text-violet-500 transition-colors'>
                    {item.period}
                  </span>
                </motion.li>
              </Link>
            ))}
          />
        </motion.ul>
      </div>
    </section>
  );
}
