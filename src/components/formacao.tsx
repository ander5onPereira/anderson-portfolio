import { motion } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';
import { useActionTranslate } from '../hooks/useActionTranslate';
import { ImageSlider } from './slide';
import { SectionTitle } from './sobre/sectionTitle';
import LoadingFallback from './loading/fallback';
const imagesBachelor = ['/diploma/utfpr-pb-1.png', '/diploma/utfpr-pb-2.png'];
const imagesMba = ['/diploma/mba-1.png', '/diploma/mba-2.png'];
const DialogCuston = lazy(() => import('./dialog'));
const imagesRocket = [
  '/rocket-certificado/clean_code.jpg',
  '/rocket-certificado/nlw_expert_html_css_js.jpg',
  '/rocket-certificado/nlw_connect_react.jpg',
  '/rocket-certificado/nlw_expert_react.jpg',
  '/rocket-certificado/nlw_journey_react.jpg',
  '/rocket-certificado/nlw_ia.jpg',
  '/rocket-certificado/nlw_unite_react.jpg',
  '/rocket-certificado/nlw_pocket_js_full_stack.jpg',
  '/rocket-certificado/fundamentos_do_node.jpg',
  '/rocket-certificado/nlw_expert_node.jpg',
  '/rocket-certificado/nlw_unite_node.jpg',
  '/rocket-certificado/nlw_unite_devops.jpg',
];
export default function Formacao() {
  const { translate } = useActionTranslate();
  const [open, setOpen] = useState('');
  function closeDialog() {
    setOpen('');
  }
  const educationList = [
    {
      text: translate('mba'),
      key: 'MBA',
    },
    {
      text: translate('bachelor'),
      key: 'UTFPR',
    },
    {
      text: 'Rocketseat (React.js, NLW Expert, IA)',
      key: 'Rocketseat',
    },
  ];
  return (
    <section className='max-w-4xl mx-auto px-6 py-16'>
      <SectionTitle text={translate('eduTitle')} />

      <motion.ul
        className='text-zinc-200 space-y-4 mt-6'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {educationList.map((item, i) => (
          <motion.li
            key={i}
            className='text-base cursor-pointer hover:text-violet-400'
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 },
            }}
            onClick={() => setOpen(item.key)}
          >
            {item.text}
          </motion.li>
        ))}
      </motion.ul>
      <Suspense fallback={<LoadingFallback />}>
        <DialogCuston
          onClose={closeDialog}
          open={open === 'UTFPR'}
          variant='large'
        >
          <ImageSlider images={imagesBachelor} isDot={false} />
        </DialogCuston>
        <DialogCuston
          onClose={closeDialog}
          open={open === 'MBA'}
          variant='large'
        >
          <ImageSlider images={imagesMba} isDot={false} />
        </DialogCuston>
        <DialogCuston
          onClose={closeDialog}
          open={open === 'Rocketseat'}
          variant='large'
        >
          <ImageSlider images={imagesRocket} />
        </DialogCuston>
      </Suspense>
    </section>
  );
}
